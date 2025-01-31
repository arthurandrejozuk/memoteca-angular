import { PensamentoService } from './../../pensamentos/pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edita-card.component.html',
  styleUrl: './edita-card.component.css'
})
export class EditaCardComponent implements OnInit{



  @Input()
  pensamento: Pensamentos = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor( private service: PensamentoService,
      private router: Router,
      private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  editaPensamento() {
     const id = this.route.snapshot.paramMap.get('id')
    this.service.editar(this.pensamento, parseInt(id!)).subscribe(() => {
       this.router.navigate(["/"])
     })
  }

  cancelarPensamento() {
    alert("Cancelando pensamento")
  }

}
