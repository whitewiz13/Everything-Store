# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets         
from .serializers import UserSerializer,ProductSerializer     
from .models import User,Product                   

class UserView(viewsets.ModelViewSet):     
  serializer_class = UserSerializer          
  queryset = User.objects.all()              

class ProductView(viewsets.ModelViewSet):       
  serializer_class = ProductSerializer         
  queryset = Product.objects.all()          