import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { DetailsComponent } from './details/details.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { SearchComboModule } from '../search-combo/search-combo.module';
import { IpAssignComponent } from './ip-assign/ip-assign.component'
import { ServidoresRoutingModule  } from './servidores.routing.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    SearchComboModule,
    ServidoresRoutingModule,
    NgbModule
  ],
  declarations: [
    CreateComponent,
    AllComponent,
    EditComponent,
    PaginationComponent,
    DetailsComponent,
    IpAssignComponent,
    SearchComponent
  ]
})
export class ServidoresModule{ }
