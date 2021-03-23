import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLanzamientosComponent } from './listado-lanzamientos.component';

describe('ListadoLanzamientosComponent', () => {
  let component: ListadoLanzamientosComponent;
  let fixture: ComponentFixture<ListadoLanzamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoLanzamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
