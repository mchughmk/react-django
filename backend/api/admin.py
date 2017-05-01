from django.contrib import admin
from .models import Country, State

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('code', 'name')


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'country')