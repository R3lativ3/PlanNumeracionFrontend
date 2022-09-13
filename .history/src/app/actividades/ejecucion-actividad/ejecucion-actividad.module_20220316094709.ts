import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionActividadRoutingModule } from './ejecucion-actividad-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxModule } from 'src/app/search-box/search-box.module';
import { SearchComponent } from './search/search.component';
import { ServidoresModule } from 'src/app/servidores/servidores.module';


@NgModule({
  declarations: [CreateComponent, UpdateComponent, IndexComponent, SearchComponent],
  imports: [
    CommonModule,
    EjecucionActividadRoutingModule,
    FormsModule,
    SearchBoxModule,
    ServidoresModule
  ]
})
export class EjecucionActividadModule { }
