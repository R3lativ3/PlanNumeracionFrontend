import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstatusServidorRoutingModule } from './estatus-servidor-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    EstatusServidorRoutingModule
  ]
})
export class EstatusServidorModule { }
