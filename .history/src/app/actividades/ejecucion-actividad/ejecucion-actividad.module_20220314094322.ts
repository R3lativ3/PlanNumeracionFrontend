import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionActividadRoutingModule } from './ejecucion-actividad-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxModule } from 'src/app/search-box/search-box.module';


@NgModule({
  declarations: [CreateComponent, UpdateComponent, IndexComponent],
  imports: [
    CommonModule,
    EjecucionActividadRoutingModule,
    FormsModule,
    SearchBoxModule
  ]
})
export class EjecucionActividadModule { }
