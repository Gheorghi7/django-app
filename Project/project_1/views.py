import re
import sqlite3
from django.shortcuts import render, get_object_or_404
from .models import AnimeModel
# Create your views here.
def main_paige(request):
   # object = get_object_or_404(BasePage, id=user_id)
    #base = sqlite3.connect("db.sqlite3")
    #cursoc = base.cursor()
    #obj = "SELECT * FROM AnimeModel"
    object =  AnimeModel.objects.all()
    count_of_objects = len(object)//2
    return render(request, "project_1/main_page.html", context={
        "object":object, 
        "len_of_obj":count_of_objects,
        "loop":range(1,len(object)//2),
        
        })

