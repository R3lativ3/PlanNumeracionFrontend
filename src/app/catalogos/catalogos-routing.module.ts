import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'roles',
    loadChildren: () => import("./rol/rol.module").then((m) => m.RolModule)
  },
  {
    path: 'versiones-sistemas-operativos',
    loadChildren: () => import("./version-sistema-operativo/version-sistema-operativo.module").then((m) => m.VersionSistemaOperativoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }