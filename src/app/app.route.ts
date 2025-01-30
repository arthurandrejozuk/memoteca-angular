import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MuralComponent } from './componentes/mural/mural.component';



export const routes: Routes = [
  { path: '', component: MuralComponent}, // Redireciona para a home

  { path: 'criarPensamento', component: FormularioComponent }, // 🔥 Rota sem "listarPensamento"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
