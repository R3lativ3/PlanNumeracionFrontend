import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinoRoutingModule } from './destino-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    DestinoRoutingModule,
    FormsModule
  ]
})
export class DestinoModule { }
