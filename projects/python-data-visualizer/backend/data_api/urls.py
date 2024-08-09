from django.urls import path
from .views import get_month_data

urlpatterns = [
    path('month-data/', get_month_data, name='get_month_data'),
]
