"""
URL configuration for data_visualizer project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import serve_static_index  # Import the custom view
# from django.views.generic import TemplateView
#from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('data_api.urls')),
    path('', serve_static_index, name='index'),  # Serve the main page directly from the static director
    # path('', RedirectView.as_view(url='/static/index.html', permanent=False)),
    # path('', TemplateView.as_view(template_name="index.html")),  # Serve the main page
    path('visualizations/', include('visualizations.urls')),  # Include URLs from the visualizations app
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

