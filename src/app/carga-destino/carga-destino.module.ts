import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaDestinoRoutingModule } from './carga-destino-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    CargaDestinoRoutingModule
  ]
})
export class CargaDestinoModule { }
