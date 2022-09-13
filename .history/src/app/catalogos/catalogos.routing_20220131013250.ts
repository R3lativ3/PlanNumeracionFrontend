import { Routes } from '@angular/router';
import { AplicacionRolComponent } from './aplicacion-rol/aplicacion-rol.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EstatusEjecucionComponent } from './estatus-ejecucion/estatus-ejecucion.component';
import { ModeloHwComponent } from './modelo-hw/modelo-hw.component';
import { PeriodicidadComponent } from './periodicidad/periodicidad.component';
import { RolComponent } from './rol/rol.component';
import { SistemaOperativoComponent } from './sistema-operativo/sistema-operativo.component';
import { TipoIpComponent } from './tipo-ip/tipo-ip.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { VersionSistemaOperativoComponent } from './version-sistema-operativo/version-sistema-operativo.component';
import { VirtualizadorComponent } from './virtualizador/virtualizador.component';
export const CatalogosRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: CategoriaComponent,
                data: {
                    title:'Listado de Servidores',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Lstado de Servidores' }
                    ],
                },
            },
            {
                path: 'roles',
                component: RolComponent,
                data: {
                    title:'Registrar Servidores',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Registrar Servidor' }
                    ],
                },
            },
            {
                path: 'categorias',
                component: CategoriaComponent,
                data: {
                    title:'Editar Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Editar Servidor' }
                    ],
                },
            },
            {
                path: 'modelos-hw',
                component: ModeloHwComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'virtualizadores',
                component: VirtualizadorComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'aplicaciones-roles',
                component: AplicacionRolComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'empresas',
                component: EmpresaComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'ubicaciones',
                component: UbicacionComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'sistemas-operativos',
                component: SistemaOperativoComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'versiones-sistema-operativo',
                component: VersionSistemaOperativoComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'tipos-ip',
                component: TipoIpComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'estatus-ejecuciones',
                component: EstatusEjecucionComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            },
            {
                path: 'periodicidades',
                component: PeriodicidadComponent,
                data: {
                    title:'Detalle de Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Detalle Servidor' }
                    ],
                },
            }
        ]
    }
];
