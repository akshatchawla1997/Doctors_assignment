from rest_framework import serializers
from .models import Specialization, Physician

class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = '__all__'

class PhysicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Physician
        fields = '__all__'