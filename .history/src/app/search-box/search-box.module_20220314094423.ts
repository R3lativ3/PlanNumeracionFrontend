import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SearchBoxComponent } from './search-box.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchBoxComponent],
  exports: [SearchBoxComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ]
})
export class SearchBoxModule { }
