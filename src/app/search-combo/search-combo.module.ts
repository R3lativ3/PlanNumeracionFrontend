import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComboComponent } from './search-combo.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchComboComponent],
  exports: [SearchComboComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ]
})
export class SearchComboModule { }
