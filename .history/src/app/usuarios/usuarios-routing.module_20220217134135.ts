import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      title:'Usuarios',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Usuarios' }
      ],
    },
  },
  {
    path: '/create',
    component: CreateComponent,
    data: {
      title:'Crear Usuario',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Crear Usuario' }
      ],
    },
  },
  {
    path: '/edit/:ID',
    component: UpdateComponent,
    data: {
      title:'Actualizar Usuario',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Actualizar Usuario' }
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
