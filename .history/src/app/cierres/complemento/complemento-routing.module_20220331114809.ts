import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  {
    path:'',
    component: AllComponent,
  },
  {
    path:'create',
    component: AllComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplementoRoutingModule { }
