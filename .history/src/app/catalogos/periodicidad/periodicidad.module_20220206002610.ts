import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodicidadRoutingModule } from './periodicidad-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [EditComponent, CreateComponent, IndexComponent],
  imports: [
    CommonModule,
    PeriodicidadRoutingModule
  ]
})
export class PeriodicidadModule { }
