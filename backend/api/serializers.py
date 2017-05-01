from rest_framework import serializers
from .models import Country, State


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('code', 'name')


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('code', 'name')