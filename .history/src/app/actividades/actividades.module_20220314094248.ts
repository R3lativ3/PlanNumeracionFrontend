import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesRoutingModule } from './actividades-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchBoxModule } from '../search-box/search-box.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActividadesRoutingModule,
    FormsModule,
    SearchBoxModule
  ]
})
export class ActividadesModule { }
