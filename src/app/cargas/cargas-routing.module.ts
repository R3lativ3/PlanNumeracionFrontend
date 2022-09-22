import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RealizarCargaComponent } from './realizar-carga/realizar-carga.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'realizar-carga',
    component: RealizarCargaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargasRoutingModule { }
