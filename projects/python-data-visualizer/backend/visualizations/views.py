from django.shortcuts import render

# Create your views here.
def chart(request):
    # Context data can be added here if needed
    context = {}

    # Render a template (you'll need to create this template)
    return render(request, 'visualizations/chart.html', context)
