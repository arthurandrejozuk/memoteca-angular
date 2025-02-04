import { NgClass } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pensamentos } from '../../pensamentos/pensamentos';

import { RouterLink } from '@angular/router';
import { PensamentoService } from '../../pensamentos/pensamento.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {


// Permite criar um template e modificar, inserindo um novo pensamento
  @Input()
  pensamento: Pensamentos = {
    id: 0,
    conteudo: "Bem Bacana",
    autoria: "Arthur",
    modelo: "modelo3",
    favorito: false
  }

  constructor(private service: PensamentoService) {

  }

  ngOnInit(): void {

  }

    larguraPensamento() {
      if (this.pensamento.conteudo.length >= 256) {
        return "card__g"
      } else {
        return "card__p"
      }
  }

  mudarIconeFavorito() {
    if (this.pensamento.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
}
