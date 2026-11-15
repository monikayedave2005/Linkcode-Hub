from rest_framework import serializers
from .models import MentorshipRequest
from .models import MentorshipRequest, QAPost ,ResumeReview,Message

class MentorshipRequestSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.username', read_only=True)
    alumni_name = serializers.CharField(source='alumni.username', read_only=True)
    student_email = serializers.CharField(source='student.email', read_only=True)
    alumni_email = serializers.CharField(source='alumni.email', read_only=True)

    class Meta:
        model = MentorshipRequest
        fields = '__all__'
        read_only_fields = ['student', 'status', 'created_at']

class QAPostSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.username', read_only=True)
    alumni_name = serializers.CharField(source='alumni.username', read_only=True, default="")
    
    class Meta:
        model = QAPost
        fields = '__all__'
        read_only_fields = ['student', 'alumni', 'is_answered', 'created_at']

class ResumeReviewSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.username', read_only=True)
    class Meta:
        model = ResumeReview
        fields = '__all__'
        read_only_fields = ['student', 'alumni', 'status', 'created_at']



class MessageSerializer(serializers.ModelSerializer):
    sender_name = serializers.CharField(source='sender.username', read_only=True)
    receiver_name = serializers.CharField(source='receiver.username', read_only=True)

    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ['sender', 'timestamp', 'is_read']