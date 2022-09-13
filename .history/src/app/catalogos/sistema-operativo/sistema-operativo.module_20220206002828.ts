import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaOperativoRoutingModule } from './sistema-operativo-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [EditComponent, IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    SistemaOperativoRoutingModule
  ]
})
export class SistemaOperativoModule { }
