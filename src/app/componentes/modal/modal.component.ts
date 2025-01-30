import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { PensamentoService } from '../../pensamentos/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent implements OnInit {

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  pensamento: Pensamentos = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }


  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.remover(this.pensamento.id).subscribe(() => {
        this.router.navigate(["/"])
      })
    }
  }

  cancelar() {
    this.router.navigate(["/"])
  }

}
