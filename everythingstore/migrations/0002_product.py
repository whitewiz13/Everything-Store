# Generated by Django 3.1.4 on 2020-12-06 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('everythingstore', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('description', models.CharField(max_length=120)),
                ('price', models.CharField(max_length=120)),
            ],
        ),
    ]