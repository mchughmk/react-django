from django.conf.urls import url
from knox import views as knox_views

from .views import LoginView, CountryList, StateList

urlpatterns = [
    url(r'login/', LoginView.as_view(), name='knox_login'),
    url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
    url(r'^countries/$', CountryList.as_view()),
    url(r'^countries/(?P<country_code>[a-zA-Z]{2})/states/$', StateList.as_view())
]