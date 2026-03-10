from django.db import models
from django.conf import settings

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='profile',
    )

    age = models.PositiveIntegerField(blank=True)
    gender = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=255, blank=True)
    active = models.BooleanField(blank=True)
    bio = models.TextField(blank=True)
    interests = models.JSONField(default=list, blank=True)
    looking_for = models.CharField(max_length=100, blank=True)
    height_cm = models.PositiveIntegerField(null=True, blank=True)
    education = models.CharField(max_length=100, blank=True)
    smoking = models.BooleanField(default=False)
    drinking = models.CharField(max_length=50, blank=True)
    profile_picture = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.user.username

