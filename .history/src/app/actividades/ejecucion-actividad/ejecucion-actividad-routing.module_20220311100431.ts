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
      title:'Ejecucion de Actividades',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Ejecucion de Actividades' }
      ],
    },
  },
  {
    path:'create',
    component: CreateComponent,
    data: {
      title:'Agregar Ejecucion de Actividad',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Actividades', url:'/actividades'},
          { title: 'Agregar Ejecucion' }
      ],
    },
  },
  {
    path:'edit/:id',
    component: UpdateComponent,
    data: {
      title:'Editar Ejecucion de Actividad',
      urls: [
          { title: 'Home', url: '/dashboard' },
          { title: 'Editar Ejecucion' }
      ],
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecucionActividadRoutingModule { }
