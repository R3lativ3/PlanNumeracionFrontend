import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstatusEjecucionRoutingModule } from './estatus-ejecucion-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateComponent, EditComponent, IndexComponent],
  imports: [
    CommonModule,
    EstatusEjecucionRoutingModule,
    FormsModule
  ]
})
export class EstatusEjecucionModule { }
