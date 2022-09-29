import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioDestinoRoutingModule } from './usuario-destino-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    UsuarioDestinoRoutingModule
  ]
})
export class UsuarioDestinoModule { }
