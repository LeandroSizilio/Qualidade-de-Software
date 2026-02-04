import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { API_BASE } from '../../environments';

export interface Relato {
  id?: string;
  conteudo: string;
  data_criacao: Date;
  title?: string;
  content?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RelatosService {
  private http = inject(HttpClient);

  private apiUrl = API_BASE;
  retrieveRelato(): Observable<HttpResponse<Relato[]>> {
    return this.http.get<Relato[]>(`${this.apiUrl}/relato/`, {
      observe: 'response',
    });
  }
  getRelato(id: string): Observable<Relato> {
    return this.http.get<Relato>(`${this.apiUrl}/relato/${id}/`);
  }
}
