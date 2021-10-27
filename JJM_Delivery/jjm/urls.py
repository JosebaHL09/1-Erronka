from django.conf.urls import url
from . import views

urlpatterns = [
    #path('/$', views.post_list),
    url(r'^$', views.erabiltzailea_new, name='jjm_erabiltzailea_new'),
    #url(r'^post_titulua/$/', views.aldatuTitulua(), name='post_titulua'),
]