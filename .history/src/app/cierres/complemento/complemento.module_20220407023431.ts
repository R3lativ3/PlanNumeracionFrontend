import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplementoRoutingModule } from './complemento-routing.module';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CreateComponent, AllComponent],
  imports: [
    CommonModule,
    ComplementoRoutingModule,
    ChartsModule,
  ]
})
export class ComplementoModule { }
