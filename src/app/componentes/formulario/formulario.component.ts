
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { PensamentoService } from '../../pensamentos/pensamento.service';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  pensamento: Pensamentos = {

    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(private service: PensamentoService) {

  }
  ngOnInit(): void {

  }

  criarPensamento() {
    console.log("Algo ocorreu")
    this.service.criar(this.pensamento).subscribe();
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }
}
