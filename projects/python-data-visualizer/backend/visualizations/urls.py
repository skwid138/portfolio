from django.urls import path
from . import views

urlpatterns = [
    # Root URL: Serve a basic chart view at '/'
    path('', views.chart, name='chart'),
]
