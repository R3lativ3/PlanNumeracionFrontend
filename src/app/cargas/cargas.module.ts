import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargasRoutingModule } from './cargas-routing.module';
import { RealizarCargaComponent } from './realizar-carga/realizar-carga.component';
import { IndexComponent } from './index/index.component';
import { SelectBoxModule } from '../select-box/select-box.module';


@NgModule({
  declarations: [RealizarCargaComponent, IndexComponent],
  imports: [
    CommonModule,
    CargasRoutingModule,
    SelectBoxModule
  ]
})
export class CargasModule { }
