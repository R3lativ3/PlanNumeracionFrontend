import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: '',
    component: AllComponent,
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
      title:'Agregar Servidor',
      urls: [
          { title: 'Servidores', url: '/servidor' },
          { title: 'Agregar Servidor' }
      ],
    },
  },
  {
    path: 'detail/:id',
    component: DetailsComponent,
    data: {
      title:'Detalle Servidor',
      urls: [
          { title: 'Servidores', url: '/servidor' },
          { title: 'Detalle Servidor' }
      ],
    },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      title:'Editar Servidor',
      urls: [
          { title: 'Servidores', url: '/servidor' },
          { title: 'Editar' }
      ],
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }