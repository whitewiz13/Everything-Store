# todo/admin.py

from django.contrib import admin
from .models import User,Product 

class UserAdmin(admin.ModelAdmin):  
  list_display = ('name', 'password')

class ProductAdmin(admin.ModelAdmin):  
  list_display = ('name', 'description','price') 

# Register your models here.
admin.site.register(User, UserAdmin) 
admin.site.register(Product, ProductAdmin) 