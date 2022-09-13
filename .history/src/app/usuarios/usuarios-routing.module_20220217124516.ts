import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

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
    path: '',
    component: CreateComponent,
    data: {
      title:'Crear Usuario',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Crear Usuario' }
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
