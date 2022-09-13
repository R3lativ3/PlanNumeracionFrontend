import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicidadComponent } from './periodicidad/periodicidad.component';
import { EstatusEjecucionComponent } from './estatus-ejecucion/estatus-ejecucion.component';
import { TipoIpComponent } from './tipo-ip/tipo-ip.component';
import { VersionSistemaOperativoComponent } from './version-sistema-operativo/version-sistema-operativo.component';
import { SistemaOperativoComponent } from './sistema-operativo/sistema-operativo.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { AplicacionRolComponent } from './aplicacion-rol/aplicacion-rol.component';
import { VirtualizadorComponent } from './virtualizador/virtualizador.component';
import { ModeloHwComponent } from './modelo-hw/modelo-hw.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { RolComponent } from './rol/rol.component';
import { CatalogosRouting } from './catalogos.routing'


@NgModule({
  declarations: [
    PeriodicidadComponent, 
    EstatusEjecucionComponent, 
    TipoIpComponent, 
    VersionSistemaOperativoComponent, 
    SistemaOperativoComponent, 
    UbicacionComponent, 
    EmpresaComponent, 
    AplicacionRolComponent, 
    VirtualizadorComponent, 
    ModeloHwComponent, 
    CategoriaComponent, 
    RolComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CatalogosRouting),

  ]
})
export class CatalogosModule { }
