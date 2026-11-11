from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    # ✅ Add our custom fields to the User edit page
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Profile', {'fields': ('role', 'course', 'batch', 'company', 'designation', 'verification_status')}),
    )
    
    # ✅ Show these fields in the user list table
    list_display = ('username', 'email', 'role', 'company', 'verification_status', 'is_staff')
    list_filter = ('role', 'verification_status', 'is_staff')

admin.site.register(User, CustomUserAdmin)