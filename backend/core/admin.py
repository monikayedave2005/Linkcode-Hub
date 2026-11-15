from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    # ✅ Added 'points' here
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Profile', {'fields': ('role', 'course', 'batch', 'company', 'designation', 'verification_status', 'points')}),
    )
    
    # ✅ Added 'points' here too
    list_display = ('username', 'email', 'role', 'company', 'verification_status', 'points', 'is_staff')
    list_filter = ('role', 'verification_status', 'is_staff')

admin.site.register(User, CustomUserAdmin)