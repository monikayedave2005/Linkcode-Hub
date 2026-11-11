from core.models import User
from rest_framework import viewsets, status, serializers
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import MentorshipRequest
from .serializers import MentorshipRequestSerializer

class MentorshipRequestViewSet(viewsets.ModelViewSet):
    serializer_class = MentorshipRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        
        # ✅ SECURITY: Only fetch requests where the logged-in user is the target alumni
        if user.role == 'alumni':
            return MentorshipRequest.objects.filter(alumni=user).order_by('-created_at')
        
        # Students only see their own sent requests
        if user.role == 'student':
            return MentorshipRequest.objects.filter(student=user).order_by('-created_at')
        
        # Admins see everything
        return MentorshipRequest.objects.all()

    def perform_create(self, serializer):
        # ✅ SECURITY: Only students can create requests
        if self.request.user.role != 'student':
            raise serializers.ValidationError("Only students can request mentorship.")
        
        # ✅ CRITICAL FIX: We check if the target alumni actually exists and is an alumni
        alumni_id = self.request.data.get('alumni')
        try:
            target_alumni = User.objects.get(id=alumni_id, role='alumni')
            # Explicitly save the student as the logged-in user, and the alumni as the target
            serializer.save(student=self.request.user, alumni=target_alumni)
        except User.DoesNotExist:
            raise serializers.ValidationError("Target user is not a valid Alumni.")

    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        req = self.get_object()
        
        # ✅ SECURITY: Only the assigned alumni can accept/reject
        if request.user != req.alumni:
            return Response({"error": "You are not authorized to manage this request."}, status=status.HTTP_403_FORBIDDEN)
        
        new_status = request.data.get('status')
        if new_status in ['accepted', 'rejected']:
            req.status = new_status
            req.save()
            return Response({"message": f"Request {new_status}"})
        return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)