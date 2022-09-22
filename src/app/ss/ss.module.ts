import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsRoutingModule } from './ss-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    SsRoutingModule
  ]
})
export class SsModule { }
