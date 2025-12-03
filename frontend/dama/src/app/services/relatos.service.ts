import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


export interface Relato {
  id?: string;
  conteudo: string;
  data_criacao: Date;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class RelatosService {
  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/api'

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]); 
  constructor() {}
  retrieveRelato(): Observable<HttpResponse<Relato[]>> {
    return this.http.get<Relato[]>(`${this.apiUrl}/relato/`, { observe: 'response' })
  }
  getRelato(id: string): Observable<Relato> {
    return this.http.get<Relato>(`${this.apiUrl}/relato/${id}/`)
  }
}

