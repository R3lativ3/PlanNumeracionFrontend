import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FeatherModule } from 'angular-feather';

import { AppsRoutes } from './apps.routing';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditAddUserComponent } from './users/edit-add-user/edit-add-user.component';
import { ContactService } from './contacts/contact.service';
import { UserService } from './users/userService.service';
import { MailGlobalVariable } from './mail/mail.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbModalModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        QuillModule.forRoot(),
        RouterModule.forChild(AppsRoutes),
        PerfectScrollbarModule,
        Ng2SearchPipeModule,
        DragDropModule,
        FlatpickrModule.forRoot(),
        HttpClientModule,
        FeatherModule,
    ],
    declarations: [
        ContactComponent,
        ContactsComponent,
        ListUsersComponent,
        EditAddUserComponent,
        ContactListComponent,
    ],
    providers: [
        ContactService,
        UserService,
        DatePipe,
        DecimalPipe,
        MailGlobalVariable,
    ]
})
export class AppsModule { }
