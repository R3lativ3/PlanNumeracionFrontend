import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarCargaComponent } from './realizar-carga.component';

describe('RealizarCargaComponent', () => {
  let component: RealizarCargaComponent;
  let fixture: ComponentFixture<RealizarCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
