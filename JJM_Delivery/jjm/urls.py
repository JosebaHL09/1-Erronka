from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='jjm_index'),
    url(r'^hiria/$', views.hiria, name='hiria')
]