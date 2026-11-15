from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
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

class ProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    user = request.user
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')

    if not old_password or not new_password:
        return Response({"error": "Both fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    # Check if old password is correct
    if not user.check_password(old_password):
        return Response({"error": "Incorrect current password"}, status=status.HTTP_400_BAD_REQUEST)

    # Set new password
    user.set_password(new_password)
    user.save()

    return Response({"message": "Password updated successfully"}, status=status.HTTP_200_OK)