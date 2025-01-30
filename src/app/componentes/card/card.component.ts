import { NgClass } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { ModalComponent } from "../modal/modal.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RouterLink],
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
