import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  pensamento = {
    id: "1",
    conteudo: "aprendendo Angular",
    autoria: "Dev",
    modelo: ""
  }

  constructor() {

  }
  ngOnInit(): void {

  }

  criarPensamento() {
    alert("Novo pensamento criado")
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }
}
