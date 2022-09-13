import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcialRoutingModule } from './parcial-routing.module';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [CreateComponent, AllComponent],
  imports: [
    CommonModule,
    ParcialRoutingModule,
    FormsModule,
    NgbModule,
    ChartsModule
  ]
})
export class ParcialModule { }
