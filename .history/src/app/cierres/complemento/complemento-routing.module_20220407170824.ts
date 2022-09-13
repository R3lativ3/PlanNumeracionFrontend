import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path:'',
    component: AllComponent,
    data: {
      title:'Resumen Complemento',
      urls: [
          { title: 'Complemento' }
      ],
    },
  },
  {
    path:'create',
    component: CreateComponent,
    data: {
      title:'Crear Cierre Complemento',
      urls: [
          { title: 'Cierre Complemento' }
      ],
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplementoRoutingModule { }
