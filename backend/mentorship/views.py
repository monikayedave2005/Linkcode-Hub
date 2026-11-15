from core.models import User
from rest_framework import viewsets, status, serializers
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import MentorshipRequest, QAPost, ResumeReview
from .serializers import MentorshipRequestSerializer, QAPostSerializer, ResumeReviewSerializer


class MentorshipRequestViewSet(viewsets.ModelViewSet):
    serializer_class = MentorshipRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role == 'student':
            return MentorshipRequest.objects.filter(student=user).order_by('-created_at')
        elif user.role == 'alumni':
            # ✅ Return ALL requests for this alumni (pending and accepted)
            return MentorshipRequest.objects.filter(alumni=user).order_by('-created_at')
        return MentorshipRequest.objects.all()

    def perform_create(self, serializer):
        if self.request.user.role != 'student':
            raise serializers.ValidationError("Only students can request mentorship.")
        
        alumni_id = self.request.data.get('alumni')
        try:
            alumni = User.objects.get(id=alumni_id, role='alumni')
            serializer.save(student=self.request.user, alumni=alumni)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid Alumni ID.")

    @action(detail=True, methods=['patch'], url_path='update_status')
    def update_status(self, request, pk=None):
        req = self.get_object()
        if request.user != req.alumni:
            return Response({"error": "Not authorized"}, status=status.HTTP_403_FORBIDDEN)
        
        new_status = request.data.get('status')
        if new_status in ['accepted', 'rejected']:
            req.status = new_status
            req.save()
            
            # ✅ AWARD POINTS on accept
            if new_status == 'accepted':
                request.user.points += 30
                request.user.save()
                
            return Response({"message": f"Request {new_status}", "points": request.user.points})
        return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)


class QAPostViewSet(viewsets.ModelViewSet):
    queryset = QAPost.objects.all().order_by('-created_at')
    serializer_class = QAPostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(student=self.request.user)

    @action(detail=True, methods=['patch'])
    def answer(self, request, pk=None):
        post = self.get_object()
        if request.user.role != 'alumni':
            return Response({"error": "Only alumni can answer."}, status=status.HTTP_403_FORBIDDEN)
        
        answer_text = request.data.get('answer')
        if answer_text:
            post.answer = answer_text
            post.alumni = request.user
            post.is_answered = True
            post.save()
            
            # ✅ AWARD POINTS: Alumni gets 10 points for answering a question
            request.user.points += 10
            request.user.save()
            
            return Response({"message": "Answer submitted"})
        return Response({"error": "Answer required"}, status=status.HTTP_400_BAD_REQUEST)


class ResumeReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ResumeReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role == 'student':
            return ResumeReview.objects.filter(student=user).order_by('-created_at')
        elif user.role == 'alumni':
            return ResumeReview.objects.filter(status='pending').order_by('-created_at')
        return ResumeReview.objects.all()

    def perform_create(self, serializer):
        if self.request.user.role != 'student':
            raise serializers.ValidationError("Only students can upload resumes.")
        serializer.save(student=self.request.user)

    @action(detail=True, methods=['patch'])
    def submit_feedback(self, request, pk=None):
        review = self.get_object()
        if request.user.role != 'alumni':
            return Response({"error": "Only alumni can review."}, status=status.HTTP_403_FORBIDDEN)
        
        feedback = request.data.get('feedback')
        if feedback:
            review.feedback = feedback
            review.alumni = request.user
            review.status = 'reviewed'
            review.save()
            
            # ✅ AWARD POINTS: Alumni gets 20 points for reviewing a resume
            request.user.points += 20
            request.user.save()
            
            return Response({"message": "Feedback submitted"})
        return Response({"error": "Feedback required"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_notifications(request):
    notifications = []
    user = request.user

    if user.role == 'student':
        reviewed_resumes = ResumeReview.objects.filter(student=user, status='reviewed').order_by('-created_at')[:5]
        for resume in reviewed_resumes:
            notifications.append({
                "id": f"res-{resume.id}",
                "title": "Resume Reviewed!",
                "desc": "Your resume was reviewed by an alumni.",
                "time": resume.created_at.strftime("%b %d, %Y"),
                "type": "resume"
            })

    elif user.role == 'alumni':
        pending_requests = MentorshipRequest.objects.filter(alumni=user, status='pending').order_by('-created_at')[:5]
        for req in pending_requests:
            notifications.append({
                "id": f"men-{req.id}",
                "title": "New Mentorship Request",
                "desc": f"{req.student.username} wants to connect with you.",
                "time": req.created_at.strftime("%b %d, %Y"),
                "type": "request"
            })

    return Response(notifications)



from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_alumni_stats(request):
    user = request.user
    if user.role != 'alumni':
        return Response({"error": "Not an alumni"}, status=403)
    
    answered = QAPost.objects.filter(alumni=user).count()
    accepted_mentees = MentorshipRequest.objects.filter(alumni=user, status='accepted').count()
    experiences = user.experiences.count() # Assuming related_name='experiences'
    
    return Response({
        "answered_questions": answered,
        "active_mentees": accepted_mentees,
        "experiences_shared": experiences
    })

from .models import MentorshipRequest, QAPost, ResumeReview, Message
from .serializers import MentorshipRequestSerializer, QAPostSerializer, ResumeReviewSerializer, MessageSerializer
from django.db.models import Q

class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        # Get messages where user is sender OR receiver
        return Message.objects.filter(Q(sender=user) | Q(receiver=user)).order_by('timestamp')

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

    @action(detail=False, methods=['get'])
    def get_chat(self, request):
        # Get chat history between current user and a specific user ID
        other_user_id = request.query_params.get('user_id')
        if not other_user_id:
            return Response({"error": "user_id required"}, status=400)

        user = request.user
        messages = Message.objects.filter(
            (Q(sender=user) & Q(receiver_id=other_user_id)) |
            (Q(sender_id=other_user_id) & Q(receiver=user))
        ).order_by('timestamp')
        
        # Mark as read
        messages.filter(receiver=user, is_read=False).update(is_read=True)
        
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)