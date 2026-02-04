import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';

  onSubmit() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          if (response.perfil) {
            localStorage.setItem('perfil', response.perfil);
          }
          this.router.navigate(['/']);
        },
        error: (_error) => {
          // Falha no login; exibir mensagem de erro para o usuário
        },
      });
    } else {
      // Username ou password não preenchidos
    }
  }
}
