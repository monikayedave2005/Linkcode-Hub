from rest_framework import viewsets
from .models import PlacementExperience
from .serializers import ExperienceSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class ExperienceViewSet(viewsets.ModelViewSet):
    # Order by newest first
    queryset = PlacementExperience.objects.all().order_by('-created_at')
    serializer_class = ExperienceSerializer
    # Anyone can read, but you must be logged in to create
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # Automatically set the author to the logged-in user
        serializer.save(author=self.request.user)