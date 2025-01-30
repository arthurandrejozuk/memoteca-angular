import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamentos } from './pensamentos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:3001/pensamentos"
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamentos[]> {
    return this.http.get<Pensamentos[]>(this.API)
  }

  criar(pensamentos: Pensamentos):Observable<Pensamentos> {
    return this.http.post<Pensamentos>(this.API, pensamentos)
  }

  remover(id: number): Observable<Pensamentos> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamentos>(url)
  }

  buscarPorId(id: number): Observable<Pensamentos>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamentos>(url)
  }


}
