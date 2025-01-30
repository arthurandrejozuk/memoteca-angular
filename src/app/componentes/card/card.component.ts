import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamentos } from '../../pensamentos/pensamentos';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input() pensamento: Pensamentos = {
    id: 0,
    conteudo: "Bem Bacana",
    autoria: "Arthur",
    modelo: "modelo3"
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

}
