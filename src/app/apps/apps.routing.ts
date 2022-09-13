import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

export const AppsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'contact-list',
                component: ContactListComponent,
                data: {
                    title:'Contact List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Contact List' }
                    ],

                },
            },
            {
                path: 'users',
                component: ListUsersComponent,
                data: {
                    title: 'Users App',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Users App' }
                    ]
                }
            },
            {
                path: 'contact-grid',
                component: ContactComponent,
                data: {
                    title: 'Contact Grid',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Contact Grid' }
                    ]
                }
            },
        ]
    }
];