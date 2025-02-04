
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { PensamentoService } from '../../pensamentos/pensamento.service';
import { BotaoCarregarMaisComponent } from '../botao-carregar-mais/botao-carregar-mais.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [FormsModule,BotaoCarregarMaisComponent, RouterModule, CardComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent implements OnInit {




  pensamentoConteudo: string = ""
  listaPensamentos: Pensamentos[] = []
  paginaAtual: number = 1
  haMaisPensamentos: Boolean = true
  favoritos = false;
  listaFavoritos: Pensamentos[] = [];
  titulo: string = "Meu Mural"

  constructor(private service: PensamentoService,
    private router: Router
  ) {

  }
  // busca o servico para pega o pensamento já no carregamento do componente
  ngOnInit(): void{
    this.service.listar(this.paginaAtual, this.pensamentoConteudo, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.pensamentoConteudo, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      })
  }

  recarregarPagina() {

    this.favoritos = false;
    this.paginaAtual = 1;

    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = "reload"
    this.router.navigate([this.router.url])
  }

  buscaPensamento() {

    // Para que sempre mostre os pensamentos buscados
    // Reiniciamos a páginação

    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    if (this.pensamentoConteudo) {
      this.service.listar(this.paginaAtual, this.pensamentoConteudo, this.favoritos)
        .subscribe(listaPensamentos => {
          this.listaPensamentos = listaPensamentos;
        })
    }
  }

  // Atualiza a lista de favoritos e a lista de pensamentos
  // A lista favoritos se comunica com o componente card,
  // permitindo atualizar com o splice a os card desfavoritados
  mostrarFavoritos() {
    this.titulo = "Meus Favoritos"
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.pensamentoConteudo, true)
      .subscribe(lista => {
        this.listaPensamentos = lista;
        this.listaFavoritos = lista;
      })
  }
}
