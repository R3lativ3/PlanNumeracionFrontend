import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesRoutingModule } from './actividades-routing.module';
import { CreateComponent } from './actividad/create/create.component';
import { UpdateComponent } from './actividad/update/update.component';
import { IndexComponent } from './actividad/index/index.component';


@NgModule({
  declarations: [CreateComponent, UpdateComponent, IndexComponent],
  imports: [
    CommonModule,
    ActividadesRoutingModule
  ]
})
export class ActividadesModule { }
