from django.urls import path
from .views import RegisterView, PendingAlumniView, VerifyAlumniView,ProfileView,change_password
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'), 
    path('pending-alumni/', PendingAlumniView.as_view(), name='pending-alumni'),
    path('verify-alumni/<int:pk>/', VerifyAlumniView.as_view(), name='verify-alumni'),
    path('me/', ProfileView.as_view(), name='profile'),
    path('change-password/', change_password, name='change-password'),
]