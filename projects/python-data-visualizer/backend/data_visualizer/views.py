import os
from django.http import FileResponse, Http404
from django.conf import settings

def serve_static_index(request):
    index_path = os.path.join(settings.STATIC_ROOT, 'index.html')
    if os.path.exists(index_path):
        return FileResponse(open(index_path, 'rb'))
    else:
        raise Http404("Index file not found")
    