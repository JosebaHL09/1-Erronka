# Generated by Django 3.2.8 on 2021-10-14 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Erabiltzailea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('erabiltzailea', models.CharField(max_length=1000)),
                ('izena', models.CharField(max_length=1000)),
                ('abizena', models.CharField(max_length=1000)),
                ('posta', models.EmailField(max_length=1000)),
                ('pasahitza', models.CharField(max_length=1000)),
            ],
        ),
    ]
