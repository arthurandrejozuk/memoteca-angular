import { NgModule } from '@angular/core';

import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MuralComponent } from './componentes/mural/mural.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { EditaCardComponent } from './componentes/edita-card/edita-card.component';
import { CustomReuseStrategy } from './custom-reuse-strategy';

// Organizamos as rotas, mudando cada url e o componente apresentado

export const routes: Routes = [
  { path: '', component: MuralComponent, data: {reuseComponent: true}},
  { path: 'criarPensamento', component: FormularioComponent },
  { path: 'excluirPensamento/:id', component: ModalComponent },
  { path: 'editarPensamento/:id', component: EditaCardComponent }
];

// Insere os routes
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
   providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
})
export class AppRoutingModule { }
