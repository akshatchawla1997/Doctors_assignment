from django.urls import path
from .views import SpecializationViewSet, PhysicianViewSet

urlpatterns = [
    # Specializations URLs
    path('specializations/', SpecializationViewSet.as_view({'get': 'list', 'post': 'create'}), name='specializations-list-create'),
    path('specializations/<int:pk>/', SpecializationViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='specializations-detail'),

    # Physicians URLs
    path('physicians/', PhysicianViewSet.as_view({'get': 'list', 'post': 'create'}), name='physicians-list-create'),
    path('physicians/<int:pk>/', PhysicianViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='physicians-detail'),
]
