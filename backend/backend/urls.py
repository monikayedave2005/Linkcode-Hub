"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from api.views import test_api
from rest_framework.routers import DefaultRouter
from experiences.views import ExperienceViewSet
from mentorship.views import MentorshipRequestViewSet


# Create a router to handle /api/experiences/ automatically
router = DefaultRouter()
router.register(r'experiences', ExperienceViewSet)
router.register(r'mentorship', MentorshipRequestViewSet, basename='mentorship')


urlpatterns = [
    path('admin/', admin.site.urls),
     path('api/test/', test_api, name='test_api'),
     path('api/auth/', include('core.urls')), # Connects your auth API
     path('api/', include(router.urls)), # <-- Add this line
]
