import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path:'',
    component: AllComponent,
    data: {
      title:'Resumen Parcial',
      urls: [
          { title: 'Parcial' }
      ],
    },
  },
  {
    path:'create',
    component: CreateComponent,
    data: {
      title:'Cierre Parcial',
      urls: [
          { title: 'Parcial' }
      ],
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcialRoutingModule { }
