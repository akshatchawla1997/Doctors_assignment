from django.db import models


# Define models for Physician, Specialization

class Specialization(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Physician(models.Model):
    name = models.CharField(max_length=100)
    dob = models.DateField()
    aadhaar_number = models.CharField(max_length=20, unique=True)
    address = models.TextField()
    license_number = models.CharField(max_length=50, unique=True)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(max_length=100)
    address = models.TextField()
    specialization = models.ForeignKey(Specialization, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
