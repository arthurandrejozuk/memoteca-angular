
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { PensamentoService } from '../../pensamentos/pensamento.service';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [RouterModule, CardComponent, CommonModule, HttpClientModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent implements OnInit {

  listaPensamentos: Pensamentos[] = []
  paginaAtual: number = 1
  constructor(private service: PensamentoService) {

  }
  // busca o servico para pega o pensamento já no carregamento do componente
  ngOnInit(): void{
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
