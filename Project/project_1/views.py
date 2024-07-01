from django.shortcuts import render, get_object_or_404
from .models import BasePage


# Create your views here.
def main_paige(request, user_id):
    object = get_object_or_404(BasePage, id=user_id)
    context = {
        "title": object.title
    }
    return render(request, "project_1/base_page.html", context)
