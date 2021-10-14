from django.shortcuts import render, get_object_or_404
from .models import Category, Post

# Create your views here.
def post_list(request, category_slug=None):
    #posts = Post.objects.all()
    posts = Post.objects.filter(published=True)
    if category_slug:
        # si viene una categoria filtramos por ella
        category = get_object_or_404(Category, slug=category_slug)
        posts = posts.filter(category=category)

    return render(request, 'blog/post_list.html', locals())

def post_details(request, id, slug):
    post = get_object_or_404(Post, id=id, slug=slug, published=True)
    return render(request, 'blog/post/detail.html', {'post':post})
