import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao-carregar-mais.component.html',
  styleUrl: './botao-carregar-mais.component.css'
})
export class BotaoCarregarMaisComponent {

  @Input()
  haMaisPensamentos: Boolean = false

}
