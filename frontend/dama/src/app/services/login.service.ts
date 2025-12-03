import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export interface LoginResponse {
  token: string;
  username: string;
  perfil?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/api/login/';

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { username: username, password: password }).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token)
          localStorage.setItem('username', response.username);
        }
      }),
    )
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('perfil')
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!this.getToken()
  }
}

