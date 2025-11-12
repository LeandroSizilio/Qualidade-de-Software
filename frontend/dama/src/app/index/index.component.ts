import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialComponent } from "../material/material.component";

@Component({
    selector: 'app-index',
    imports: [RouterLink, HeaderComponent, MaterialComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css'
})
export class IndexComponent {

}
