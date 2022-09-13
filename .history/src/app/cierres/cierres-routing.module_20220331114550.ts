import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'complemento',
    loadChildren: () => import("./complemento/complemento.module").then((m) => m.ComplementoModule),
  },
  {
    path: 'parcial',
    loadChildren: () => import("./parcial/parcial.module").then((m) => m.ParcialModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CierresRoutingModule { }
