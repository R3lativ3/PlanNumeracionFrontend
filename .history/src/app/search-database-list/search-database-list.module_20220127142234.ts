import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {SearchDatabaseListComponent} from './search-database-list.component';


@NgModule({
  declarations: [
    SearchDatabaseListComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ],
  exports: [
    SearchDatabaseListComponent
  ]
})
export class SearchDatabaseListModule { }
