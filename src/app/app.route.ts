import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MuralComponent } from './componentes/mural/mural.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "listarPensamento",
    pathMatch:"full"
  },
  {
    path: "criarPensamento",
    component: FormularioComponent
  },
  {
    path: "listarPensamento",
    component: MuralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
