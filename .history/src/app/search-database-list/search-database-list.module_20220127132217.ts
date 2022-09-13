import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ],
  declarations: [
    SearchDatabaseListModule
  ]
})
export class SearchDatabaseListModule { }
