from django.urls import path
from .views import RegisterView, PendingAlumniView, VerifyAlumniView
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'), 
    path('pending-alumni/', PendingAlumniView.as_view(), name='pending-alumni'),
    path('verify-alumni/<int:pk>/', VerifyAlumniView.as_view(), name='verify-alumni'),
]