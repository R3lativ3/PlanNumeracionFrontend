import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpAssignComponent } from './ip-assign/ip-assign.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IpAssignComponent],
  exports: [IpAssignComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UtilModule { }
