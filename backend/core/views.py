from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser
from .serializers import RegisterSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import User

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        super().post(request, *args, **kwargs)
        return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)


class PendingAlumniView(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

    def get_queryset(self):
        return User.objects.filter(role='alumni', verification_status='pending')


class VerifyAlumniView(generics.UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]
    queryset = User.objects.filter(role='alumni')

    def patch(self, request, *args, **kwargs):
        user = self.get_object()
        status_val = request.data.get('status') # 'verified' or 'rejected'
        
        if status_val in ['verified', 'rejected']:
            user.verification_status = status_val
            user.save()
            return Response({"message": f"Alumni status updated to {status_val}"})
        return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)