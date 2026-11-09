from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('alumni', 'Alumni'),
        ('admin', 'Admin'),
    )
    
    # Make email unique and required
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='student')
    
    # Student fields
    course = models.CharField(max_length=100, blank=True, null=True)
    batch = models.CharField(max_length=50, blank=True, null=True)
    
    # Alumni fields
    company = models.CharField(max_length=100, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)
    verification_status = models.CharField(max_length=20, default='pending') 

    def __str__(self):
        return f"{self.username} - {self.role}"
