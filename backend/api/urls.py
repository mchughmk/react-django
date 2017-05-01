from django.conf.urls import url
from .views import CountryList, StateList

urlpatterns = [
    url(r'^countries/$', CountryList.as_view()),
    url(r'^countries/(?P<country_code>[a-zA-Z]{2})/states/$', StateList.as_view())
]