from django.contrib.auth import authenticate
from django.contrib.auth.signals import user_logged_in
from django.http import Http404
from knox.models import AuthToken
from knox.settings import knox_settings
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Country
from .serializers import CountrySerializer, StateSerializer

class LoginView(GenericAPIView):
    def post(self, request, format=None):
        username = request.data['username']
        password = request.data['password']

        user = authenticate(username=username, password=password)

        if user:
            token = AuthToken.objects.create(user)
            user_logged_in.send(sender=user.__class__, request=request, user=user)
            UserSerializer = knox_settings.USER_SERIALIZER
            return Response({
                'user': UserSerializer(user, context=self.get_serializer_context()).data,
                'token': token,
            })
        else:
            return Response({
                'user': '',
                'token': ''
            })


class CountryList(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        countries = Country.objects.all()
        serializer = CountrySerializer(countries, many=True)
        return Response(serializer.data)


class StateList(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, country_code, format=None):
        try:
            country = Country.objects.get(code=country_code.upper())
        except Country.DoesNotExist:
            raise Http404

        serializer = StateSerializer(country.states, many=True)
        return Response(serializer.data)