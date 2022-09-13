import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualizadorRoutingModule } from './virtualizador-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditComponent, CreateComponent, IndexComponent],
  imports: [
    CommonModule,
    VirtualizadorRoutingModule,
    FormsModule
  ]
})
export class VirtualizadorModule { }
