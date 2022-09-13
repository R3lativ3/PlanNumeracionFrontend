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
      title:'Contact List',
      urls: [
          { title: 'Dashboard', url: '/dashboard' },
          { title: 'Contact List' }
      ],
    },
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'det/:id',
    component: DetailsComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }