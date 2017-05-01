from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Country
from .serializers import CountrySerializer, StateSerializer

class CountryList(APIView):
    def get(self, request, format=None):
        countries = Country.objects.all()
        serializer = CountrySerializer(countries, many=True)
        return Response(serializer.data)


class StateList(APIView):
    def get(self, request, country_code, format=None):
        try:
            country = Country.objects.get(code=country_code.upper())
        except Country.DoesNotExist:
            raise Http404

        serializer = StateSerializer(country.states, many=True)
        return Response(serializer.data)