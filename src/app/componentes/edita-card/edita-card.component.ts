import { PensamentoService } from './../../pensamentos/pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Pensamentos } from '../../pensamentos/pensamentos';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edita-card',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edita-card.component.html',
  styleUrl: './edita-card.component.css'
})
export class EditaCardComponent implements OnInit{



  @Input()
  pensamento: Pensamentos = {
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  formulario!: FormGroup

  constructor(
      private service: PensamentoService,
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario.patchValue(pensamento)
    })

    this.formulario = this.formBuilder.group({
      conteudo: [this.pensamento.conteudo, Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
        autoria: [this.pensamento.autoria, Validators.compose([
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
      modelo: [this.pensamento.modelo],
      favorito:  [this.pensamento.favorito]
    })

  }

  editaPensamento() {
    console.log("teste")
    const id = this.route.snapshot.paramMap.get('id')
    if (this.formulario.valid && id) {
     this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(["/"])
      })
    }
  }

  cancelarPensamento() {
    this.router.navigate(["/"])
  }

  habilitarBotao(): string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined {
    if (this.formulario.valid) {
      return "button"
    } else {
      return "button__desabilitado"
    }
  }
}
