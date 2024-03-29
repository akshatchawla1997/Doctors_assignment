# Generated by Django 4.0 on 2023-12-29 09:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Specialization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Physician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dob', models.DateField()),
                ('aadhaar_number', models.CharField(max_length=20, unique=True)),
                ('license_number', models.CharField(max_length=50, unique=True)),
                ('phone_number', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=100)),
                ('address', models.TextField()),
                ('name', models.CharField(max_length=10, unique=True)),
                ('specialization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.specialization')),
            ],
        ),
    ]
