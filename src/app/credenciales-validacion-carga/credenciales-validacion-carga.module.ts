import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredencialesValidacionCargaRoutingModule } from './credenciales-validacion-carga-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    CredencialesValidacionCargaRoutingModule
  ]
})
export class CredencialesValidacionCargaModule { }
