import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    component: CategoriaComponent,
    data: {
      title:'Servidores',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Servidores' }
      ],
    },
  },*/
  {
    path: 'categorias',
    loadChildren: () => import("./categoria/categoria.module").then((m) => m.CategoriaModule),
  },
  {
    path: 'empresas',
    loadChildren: () => import("./empresa/empresa.module").then((m) => m.EmpresaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }