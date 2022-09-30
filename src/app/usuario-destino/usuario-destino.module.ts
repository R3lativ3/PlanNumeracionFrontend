import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioDestinoRoutingModule } from './usuario-destino-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    UsuarioDestinoRoutingModule
  ]
})
export class UsuarioDestinoModule { }
