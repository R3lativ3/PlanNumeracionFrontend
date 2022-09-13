import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'actividades',
    loadChildren: () => import("./actividad/actividad.module").then((m) => m.ActividadModule),
  },
  {
    path: 'ejecucion-actividades',
    loadChildren: () => import("./ejecucion-actividad/ejecucion-actividad.module").then((m) => m.EjecucionActividadModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule { }
