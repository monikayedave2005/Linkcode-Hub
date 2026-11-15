from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from experiences.views import ExperienceViewSet
from mentorship.views import MentorshipRequestViewSet, QAPostViewSet, ResumeReviewViewSet,get_notifications, MessageViewSet
# ✅ Import settings and static
from django.conf import settings
from django.conf.urls.static import static
from mentorship.views import get_alumni_stats

router = DefaultRouter()
router.register(r'experiences', ExperienceViewSet)
router.register(r'mentorship', MentorshipRequestViewSet, basename='mentorship')
router.register(r'qa', QAPostViewSet, basename='qa')
router.register(r'resumes', ResumeReviewViewSet, basename='resumes')
router.register(r'messages', MessageViewSet, basename='messages')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('core.urls')), 
    path('api/', include(router.urls)),
    path('api/notifications/', get_notifications, name='notifications'), 
    path('api/alumni-stats/', get_alumni_stats, name='alumni-stats'),
]

# ✅ Tell Django to serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)