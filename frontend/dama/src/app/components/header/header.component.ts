import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IndexComponent } from "../../index/index.component";
import { AuthService } from '../../services/auth.service';

import { ButtonModule } from 'primeng/button'; 


@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterOutlet, IndexComponent, ButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public authService: AuthService) {} 
}
