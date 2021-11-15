from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='jjm_index'),
    url(r'^hiria/', views.hiria, name='hiria'),
    url(r'^post_hiria/', views.post_hiriak, name='post_hiria'),
    url(r'^show_jatetxea/', views.show_jatetxea, name='show_jatetxea'),
    url(r'^login/', views.loginUser, name='login'),
    url(r'^logout/', views.logoutUser, name='logout'),
    url(r'^register/', views.registerUser, name='register'),
    url(r'^kmrange/', views.kmRange, name='kmrange'),  
    #url(r'^get_hiriakMap/', views.get_hiriakMap, name='get_hiriakMap'),

]