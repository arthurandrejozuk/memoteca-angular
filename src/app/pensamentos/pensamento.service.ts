import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamentos } from './pensamentos';
import { Observable } from 'rxjs';

// CRUD criado para consumir a API, no caso, o JSON-SERVER
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  // pega a url padrão da API
  private readonly API = "http://localhost:3001/pensamentos";

  // O constructor serve para injetar propriedades utilizadas no componente
  // no caso, a propriedade http faz requisições para url
  constructor(private http: HttpClient) { }

  // o retorno é um observable, pois espera uma ação do http  // Observable é um tipo de retorno
                                                              // que permite esperar por eventos e mudanças
                                                              // e é o retorno de do http
  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamentos[]> {
    const itensPagina = 6

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPagina)

    // Criamos a possibilidade de buscar por um filtro
    // caso não exista nenhum caracter, não é usado o paramentro de filtro
    if (filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }

    if (favoritos) {
      params = params.set("favorito", true)
    }
                      // Tipo de retorno esperado
    return this.http.get<Pensamentos[]>(this.API, { params })
  }

  criar(pensamentos: Pensamentos): Observable<Pensamentos> {
    // Utiliza o post pra criar um novo pensamento
    return this.http.post<Pensamentos>(this.API, pensamentos)
  }

  editar(pensamento: Pensamentos): Observable<Pensamentos>{
    // utiliza o patch junto com a url do pensamento para edita-lo
    const url = `${this.API}/${pensamento.id}`
    return this.http.patch<Pensamentos>(url, pensamento)
  }

  mudarFavorito(pensamento: Pensamentos): Observable<Pensamentos> {
    // Modifica o valor da API para o propriedade favorito(boolean)
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  remover(id: number): Observable<Pensamentos> {
    // Remove o pensamento pelo id
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamentos>(url)
  }

  buscarPorId(id: number): Observable<Pensamentos>{
    // Busca o pensamento pelo id
    const url = `${this.API}/${id}`
    return this.http.get<Pensamentos>(url)
  }

  buscarPorFavoritos(pagina: number, filtro: string): Observable<Pensamentos[]> {
    // assim como o método lista, este utliza de parametros parecidos
    // Com a única diferença do parametro favorito, que apenas pega os pensamentos favoritados

     const itensPagina = 6
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPagina)
      .set("favorito", true)

    // Criamos a possibilidade de buscar por um filtro
    // caso não exista nenhum caracter, não é usado no params
    if (filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }

    return this.http.get<Pensamentos[]>(this.API, { params })
  }

}
