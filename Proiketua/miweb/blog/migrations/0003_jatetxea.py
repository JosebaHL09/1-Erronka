# Generated by Django 3.2.8 on 2021-10-15 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_saskia'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jatetxea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('izena', models.CharField(max_length=1000)),
                ('helbidea', models.CharField(max_length=1000)),
                ('telefonoa', models.IntegerField(max_length=9)),
                ('mota', models.CharField(max_length=1000)),
                ('izarrak', models.IntegerField(max_length=1)),
                ('oharrak', models.CharField(max_length=1000)),
                ('img_path', models.CharField(max_length=1000)),
            ],
        ),
    ]
