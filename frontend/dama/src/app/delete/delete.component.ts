import { Component } from '@angular/core';
import { createDefaultProfissional } from '../shared/model-factories';
import { Profissional } from '../services/cadastro.service';


@Component({
    selector: 'app-delete',
  standalone: true,
    imports: [],
    templateUrl: './delete.component.html',
    styleUrl: './delete.component.css'
})
export class DeleteComponent {
  profissional: Profissional = createDefaultProfissional();
}
