from rest_framework import serializers
from .models import PlacementExperience

class ExperienceSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    author_role = serializers.CharField(source='author.role', read_only=True)
    author_id = serializers.IntegerField(source='author.id', read_only=True) # ✅ ADD THIS
    
    class Meta:
        model = PlacementExperience
        fields = '__all__'
        read_only_fields = ['author', 'upvotes', 'created_at']