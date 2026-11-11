from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role', 'course', 'batch', 'company', 'designation']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data.get('role', 'student'),
            course=validated_data.get('course', ''),
            batch=validated_data.get('batch', ''),
            company=validated_data.get('company', ''),
            designation=validated_data.get('designation', '')
        )
        if user.role == 'alumni':
            user.verification_status = 'pending'
        else:
            user.verification_status = 'verified'
        user.save()
        return user


# ✅ ADD THIS NEW SERIALIZER
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'course', 'batch', 'company', 'designation', 'verification_status']
        read_only_fields = ['id', 'verification_status']