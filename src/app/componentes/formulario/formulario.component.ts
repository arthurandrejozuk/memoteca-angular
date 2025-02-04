
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { PensamentoService } from '../../pensamentos/pensamento.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {


  // pensamento: Pensamentos = {
  //   conteudo: "",
  //   autoria: "",
  //   modelo: "modelo1"
  // }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  formulario!: FormGroup;


  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([Validators.required,
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      modelo: ['modelo1'],
      favorito: false
    })
  }

  // cria pensamento e notifica que foi criado
  criarPensamento() {
    console.log("Funcionando")
    console.log(this.formulario.get('autoria')?.errors)
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/'])
      });
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/'])
  }

  habilitarBotao(): string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined {
  if (this.formulario.valid) {
    return "button"
  } else {
    return "button__desabilitado"
  }
}
}
