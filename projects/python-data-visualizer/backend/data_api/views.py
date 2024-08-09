from django.http import JsonResponse

def get_month_data(request):
    data = {
        "labels": ["January", "February", "March", "April", "May"],
        "values": [10, 15, 7, 20, 5]
    }
    return JsonResponse(data)
