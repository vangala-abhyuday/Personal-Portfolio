from django.db import models

# Create your models here.
class contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    subject= models.CharField(max_length=30)
    desc=  models.TextField()

    def __str__(self):
        return self.name+" - "+self.subject