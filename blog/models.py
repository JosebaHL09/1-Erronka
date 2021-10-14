from django.db import models
from django.contrib.auth.models import  User

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)

    def __unicode__(self):
        return self.title
class Post(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)
    author = models.ForeignKey(User,related_name='posts',on_delete =models.CASCADE)
    created_date =models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField()
    published = models.BooleanField(default=True)

    def __unicode__(self):
        return self.title

