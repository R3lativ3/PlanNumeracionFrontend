import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      title:'Servidores',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Servidores' }
      ],
    },
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      title:'Crear Categoria',
      urls: [
          { title: 'Categorias', url: '/catalogos/categorias' },
          { title: 'Servidores' }
      ],
    },
  },
  {
    path: 'edit',
    component: EditComponent,
    data: {
      title:'Editar Categoria',
      urls: [
          { title: 'Editar Categoria', url: '/catalogos/categorias' },
          { title: 'Servidores' }
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
