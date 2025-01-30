import { Component } from '@angular/core';
import { FormularioComponent } from '../componentes/formulario/formulario.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
