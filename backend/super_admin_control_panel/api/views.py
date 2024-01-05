from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Specialization, Physician
from .serializer import SpecializationSerializer, PhysicianSerializer

# ViewSets define the view behavior.
class SpecializationViewSet(viewsets.ModelViewSet):
    queryset = Specialization.objects.all()
    serializer_class = SpecializationSerializer

class PhysicianViewSet(viewsets.ModelViewSet):
    queryset = Physician.objects.all()
    serializer_class = PhysicianSerializer
