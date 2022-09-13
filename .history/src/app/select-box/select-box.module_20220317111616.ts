import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBoxComponent } from './select-box/select-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectBoxComponent],
  exports: [SelectBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SelectBoxModule { }
