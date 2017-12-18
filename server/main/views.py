from django.shortcuts import render


def about(request):
    return render(request, "about.html")

def contactUs(request):
    return render(request, "contact-us.html")

def home(request):
    return render(request, "home.html")
