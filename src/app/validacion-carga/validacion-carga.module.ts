import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionCargaRoutingModule } from './validacion-carga-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    ValidacionCargaRoutingModule
  ]
})
export class ValidacionCargaModule { }
