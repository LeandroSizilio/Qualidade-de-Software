import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/relato/';

  // FiltroService
retrieveRelato(filters: { searchTerm?: string; rangeDates?: Date[] }): Observable<unknown> {
  const params = new HttpParams({
    fromObject: {
      q: filters.searchTerm || '',
      startDate: filters.rangeDates?.[0]?.toISOString() || '',
      endDate: filters.rangeDates?.[1]?.toISOString() || ''
    }
  });
  
  return this.http.get('/api/relatos', { params });
}
}