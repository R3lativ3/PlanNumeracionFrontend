import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateComponent, EditComponent, IndexComponent],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule
  ]
})
export class EmpresaModule { }
