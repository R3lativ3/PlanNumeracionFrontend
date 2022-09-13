import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpAssignComponent } from './ip-assign/ip-assign.component'


@NgModule({
  declarations: [IpAssignComponent],
  exports: [IpAssignComponent],
  imports: [
    CommonModule
  ]
})
export class UtilModule { }
