import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../userService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ListUsersComponent } from './list-users.component';
import { DatePipe } from '@angular/common';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      imports:[ReactiveFormsModule,RouterTestingModule,FormsModule],
      providers:[UserService,DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
