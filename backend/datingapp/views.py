from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions

from .serializers import UserSerializer
User = get_user_model()

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    """
    GET /users/        -> list all users (public info)
    GET /users/<id>/   -> retrieve one user's public info
    POST /users/       -> create a new user (+ profile)
    """
    queryset = User.objects.all().select_related('profile')
    serializer_class = UserSerializer

    # Adjust permissions as you like:
    # - AllowAny: open list/create
    # - IsAuthenticatedOrReadOnly: only logged-in can create/update, everyone can read
    permission_classes = [permissions.AllowAny]
