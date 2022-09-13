import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloHwRoutingModule } from './modelo-hw-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateComponent, EditComponent, IndexComponent],
  imports: [
    CommonModule,
    ModeloHwRoutingModule,
    FormsModule
  ]
})
export class ModeloHwModule { }
