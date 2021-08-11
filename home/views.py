from django.shortcuts import render, HttpResponse
from home import models
from home.models import contact

# Create your views here.
def home(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        phone=request.POST['phone']
        subject=request.POST['subject']
        desc=request.POST['desc']

        ins=contact(name=name, email=email, phone=phone, subject=subject, desc=desc)
        ins.save()

    return render(request, 'home.html')

    # return HttpResponse("this is portfolio home page")