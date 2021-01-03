# todo/serializers.py

from rest_framework import serializers
from .models import User,Product

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('name', 'password')

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ('name', 'description','price')