import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Relato {
  id?: string;
  conteudo: string;
  publicador: string;
}

@Injectable({
  providedIn: 'root'
})
export class RelatoService {
  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/api/relato/';

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]); 

  constructor() { }

  registerRelato(relato: Relato): Observable<HttpResponse<any>> {
    const token = localStorage.getItem('token'); // ou de onde você estiver armazenando o token
    console.log('Token:', token); // Adicione esta linha para verificar o token
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });
    
    const payload = {
      conteudo: relato.conteudo,
      publicador: relato.publicador  // Adicione esta linha
    };
  
    return this.http.post<any>(this.apiUrl, relato, { observe: 'response', headers });
  }
}