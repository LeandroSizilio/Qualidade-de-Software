import { Component } from '@angular/core';
import { ProfissionalService, Profissional } from '../services/cadastro.service';


@Component({
    selector: 'app-delete',
    imports: [],
    templateUrl: './delete.component.html',
    styleUrl: './delete.component.css'
})
export class DeleteComponent {
  profissional: Profissional = {
    nome_completo: '',
    cpf: '',
    login: '',
    senha: '',
    conselho: '',
    contato: '',
    email: '',
    bio: ''
  }
}
