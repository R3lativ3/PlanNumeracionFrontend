import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplementoRoutingModule } from './complemento-routing.module';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';


@NgModule({
  declarations: [CreateComponent, AllComponent],
  imports: [
    CommonModule,
    ComplementoRoutingModule
  ]
})
export class ComplementoModule { }
