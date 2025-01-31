import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MuralComponent } from './componentes/mural/mural.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { EditaCardComponent } from './componentes/edita-card/edita-card.component';

// Organizamos as rotas, mudando cada url e o componente apresentado

export const routes: Routes = [
  { path: '', component: MuralComponent},
  { path: 'criarPensamento', component: FormularioComponent },
  { path: 'excluirPensamento/:id', component: ModalComponent },
  { path: 'editarPensamento/:id', component: EditaCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
