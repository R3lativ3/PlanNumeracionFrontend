import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComboComponent } from './search-combo.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [SearchComboComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule
  ]
})
export class SearchComboModule { }
