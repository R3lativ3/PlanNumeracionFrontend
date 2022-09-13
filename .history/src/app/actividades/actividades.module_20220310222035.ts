import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadComponent } from './actividad/actividad.component';
import { EjecucionActividadComponent } from './ejecucion-actividad/ejecucion-actividad.component';
import { CreateComponent } from './actividad/create/create.component';
import { UpdateComponent } from './actividad/update/update.component';
import { IndexComponent } from './actividad/index/index.component';


@NgModule({
  declarations: [ActividadComponent, EjecucionActividadComponent, CreateComponent, UpdateComponent, IndexComponent],
  imports: [
    CommonModule,
    ActividadesRoutingModule
  ]
})
export class ActividadesModule { }
