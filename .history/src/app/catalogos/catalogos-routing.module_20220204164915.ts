import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { CreateComponent } from './categoria/create/create.component';
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
    component: CategoriaComponent,
    data: {
      title:'Agregar Servidor',
      urls: [
          { title: 'Servidores', url: '/servidores' },
          { title: 'Agregar Servidor' }
      ],
    },
    children: [
        {
            path: 'create',
            component: CreateComponent
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }