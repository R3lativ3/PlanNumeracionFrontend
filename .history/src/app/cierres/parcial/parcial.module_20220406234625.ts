import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcialRoutingModule } from './parcial-routing.module';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateComponent, AllComponent],
  imports: [
    CommonModule,
    ParcialRoutingModule,
    FormsModule
  ]
})
export class ParcialModule { }
