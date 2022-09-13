import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBoxComponent } from './select-box/select-box.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [SelectBoxComponent],
  exports: [SelectBoxComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ]
})
export class SelectBoxModule { }
