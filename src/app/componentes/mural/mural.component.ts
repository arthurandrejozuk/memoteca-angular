import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [RouterModule, CardComponent, CommonModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {

  listaPensamentos = [
    {
      conteudo: "Crie uma lista para os pensamentos",
      autoria: "Arthur",
      modelo: "modelo3"
    },
    {
      conteudo: "Você precisa inserir no componente filho o decorator @input()",
      autoria: "Arthur",
      modelo: "modelo2"
    },
     {
      conteudo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      autoria: "Arthur",
      modelo: "modelo2"
    },
  ]


}
