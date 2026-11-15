from rest_framework import viewsets
from .models import PlacementExperience
from .serializers import ExperienceSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.exceptions import PermissionDenied

class ExperienceViewSet(viewsets.ModelViewSet):
    # ✅ QUERY OPTIMIZATION: Fetch author data in the same query
    queryset = PlacementExperience.objects.select_related('author').all().order_by('-created_at')
    serializer_class = ExperienceSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        user = self.request.user
        
        # Security check
        if user.role != 'alumni':
            raise PermissionDenied("Only Alumni can share placement experiences.")
        
        # ✅ AWARD POINTS: Alumni gets 50 points for sharing an experience
        user.points += 50
        user.save()
        
        serializer.save(author=user)