import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionSistemaOperativoRoutingModule } from './version-sistema-operativo-routing.module';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [CreateComponent, IndexComponent, EditComponent],
  imports: [
    CommonModule,
    VersionSistemaOperativoRoutingModule
  ]
})
export class VersionSistemaOperativoModule { }
