import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../../environments';
import { AuthService } from './login.service';

export interface Relato {
  id?: string;
  conteudo: string;
  publicador: string;
}

@Injectable({
  providedIn: 'root',
})
export class RelatoService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  private apiUrl = `${API_BASE}/relato/`;

  registerRelato(relato: Relato): Observable<HttpResponse<Relato>> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders({
      Authorization: `Token ${token}`,
    });

    return this.http.post<Relato>(this.apiUrl, relato, {
      observe: 'response',
      headers,
    });
  }
}
