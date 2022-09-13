import { Routes } from '@angular/router';
export const ServidoresRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllComponent,
                data: {
                    title:'Listado de Servidores',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Lstado de Servidores' }
                    ],
                },
            },
            {
                path: 'create',
                component: CreateComponent,
                data: {
                    title:'Registrar Servidores',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Registrar Servidor' }
                    ],
                },
            },
            {
                path: 'edit',
                component: EditComponent,
                data: {
                    title:'Editar Servidor',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Editar Servidor' }
                    ],
                },
            },
            {
                path: 'detail',
                component: DetailsComponent,
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
