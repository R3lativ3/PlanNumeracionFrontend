import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
const routes: Routes = [
  {
    path: '',
    component: CategoriaComponent,
    data: {
      title:'Servidores',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Servidores' }
      ],
    },
  },
  {
    path: 'categorias',
    loadChildren: () =>
    import("./categoria/categoria.module").then((m) => m.CategoriaModule),

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }