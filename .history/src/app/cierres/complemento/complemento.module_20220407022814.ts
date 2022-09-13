import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplementoRoutingModule } from './complemento-routing.module';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';


@NgModule({
  declarations: [CreateComponent, AllComponent],
  imports: [
    CommonModule,
    ComplementoRoutingModule,
    NgbModule,
    ChartsModule,
    NgApexchartsModule,
    NgxChartsModule,
    ChartistModule,
  ]
})
export class ComplementoModule { }
