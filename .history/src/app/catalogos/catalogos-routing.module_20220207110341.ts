import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'aplicaciones',
    loadChildren: () => import("./aplicacion-rol/aplicacion-rol.module").then((m) => m.AplicacionRolModule),
  },
  {
    path: 'categorias',
    loadChildren: () => import("./categoria/categoria.module").then((m) => m.CategoriaModule),
  },
  {
    path: 'empresas',
    loadChildren: () => import("./empresa/empresa.module").then((m) => m.EmpresaModule)
  },
  {
    path: 'modelos-hw',
    loadChildren: () => import("./modelo-hw/modelo-hw.module").then((m) => m.ModeloHwModule)
  },
  {
    path: 'virtualizadores',
    loadChildren: () => import("./virtualizador/virtualizador.module").then((m) => m.VirtualizadorModule)
  },
  {
    path: 'estatus-ejecucion',
    loadChildren: () => import("./estatus-ejecucion/estatus-ejecucion.module").then((m) => m.EstatusEjecucionModule)
  },
  {
    path: 'periodicidades',
    loadChildren: () => import("./periodicidad/periodicidad.module").then((m) => m.PeriodicidadModule)
  },
  {
    path: 'roles',
    loadChildren: () => import("./rol/rol.module").then((m) => m.RolModule)
  },
  {
    path: 'sistemas-operativos',
    loadChildren: () => import("./sistema-operativo/sistema-operativo.module").then((m) => m.SistemaOperativoModule)
  },
  {
    path: 'versiones-sistemas-operativos',
    loadChildren: () => import("./version-sistema-operativo/version-sistema-operativo.module").then((m) => m.VersionSistemaOperativoModule)
  },
  {
    path: 'ubicaciones',
    loadChildren: () => import("./ubicacion/ubicacion.module").then((m) => m.UbicacionModule)
  },
  {
    path: 'tipos-ip',
    loadChildren: () => import("./tipo-ip/tipo-ip.module").then((m) => m.TipoIpModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }