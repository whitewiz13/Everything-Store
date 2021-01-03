# backend/urls.py

from django.contrib import admin
from django.urls import path, include           
from rest_framework import routers                 
from everythingstore import views                  

router = routers.DefaultRouter()                 
router.register(r'users', views.UserView, 'users')     
router.register(r'products', views.ProductView, 'products')     

urlpatterns = [
    path('admin/', admin.site.urls),        
    path('', include(router.urls))  
]