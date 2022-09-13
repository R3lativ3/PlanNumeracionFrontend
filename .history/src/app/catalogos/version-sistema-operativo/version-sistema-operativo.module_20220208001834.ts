import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionSistemaOperativoRoutingModule } from './version-sistema-operativo-routing.module';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateComponent, IndexComponent, EditComponent],
  imports: [
    CommonModule,
    VersionSistemaOperativoRoutingModule,
    FormsModule
  ]
})
export class VersionSistemaOperativoModule { }
