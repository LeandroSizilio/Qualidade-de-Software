import uuid
from api.models.usuario import Usuario
from django.db import models


class Profissional(models.Model):
    nome_completo = models.CharField(max_length=100)
    cpf = models.CharField(unique=True, max_length=11)
    conselho = models.CharField(unique=True, max_length=20)
    contato = models.CharField(unique=True, max_length=20)
    bio = models.TextField(blank=True, null=True, default=None)
    user = models.OneToOneField(Usuario, on_delete=models.CASCADE, blank=True, null=True, related_name='profissional')

    def __str__(self):
        return f"Nome completo: {self.nome_completo}   Conselho: {self.conselho}\nEmail: {self.user.email} Contato: {self.contato}"