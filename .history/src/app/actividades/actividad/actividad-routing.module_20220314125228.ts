import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      title:'Actividades',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Actividades' }
      ],
    },
  },
  {
    path:'create',
    component: CreateComponent,
    data: {
      title:'Agregar Actividad',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Agregar Actividad' }
      ],
    },
  },
  {
    path:'edit/:id',
    component: UpdateComponent,
    data: {
      title:'Editar Actividad',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Editar Actividad' }
      ],
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }

