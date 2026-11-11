from django.db import models
from core.models import User

class PlacementExperience(models.Model):
    STATUS_CHOICES = (
        ('Selected', 'Selected'),
        ('Interview Completed', 'Interview Completed'),
        ('Rejected', 'Rejected'),
    )

    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='experiences')
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    year = models.CharField(max_length=50) 
    rounds = models.CharField(max_length=50) 
    ctc = models.CharField(max_length=50) 
    status = models.CharField(max_length=30, choices=STATUS_CHOICES)
    quote = models.TextField() 
    tags = models.CharField(max_length=255, help_text="Comma separated tags")
    
    upvotes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.company} - {self.role}"