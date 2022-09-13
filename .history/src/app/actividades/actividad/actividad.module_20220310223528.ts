import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule
  ]
})
export class ActividadModule { }
