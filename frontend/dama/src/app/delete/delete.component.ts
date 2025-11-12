import { Component } from '@angular/core';
import { Profissional } from '../services/cadastro.service';


@Component({
    selector: 'app-delete',
  standalone: true,
    imports: [],
    templateUrl: './delete.component.html',
    styleUrl: './delete.component.css'
})
export class DeleteComponent {
  profissional: Profissional = {
    nome_completo: '',
    cpf: '',
    conselho: '',
    contato: '',
    bio: '',
    user: {
      password: '',
      username: '',
      email: '',
      perfil: ''
    }
  }
}
