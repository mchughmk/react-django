from django.db import models

# Create your models here.
class Country(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Countries'

class State(models.Model):
    code = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    country = models.ForeignKey(Country, models.PROTECT, related_name='states')

    def __str__(self):
        return self.name