import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcialRoutingModule } from './parcial-routing.module';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';


@NgModule({
  declarations: [CreateComponent, AllComponent],
  imports: [
    CommonModule,
    ParcialRoutingModule
  ]
})
export class ParcialModule { }
