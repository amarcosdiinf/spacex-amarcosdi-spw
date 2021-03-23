import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximoLanzamientoComponent } from './proximo-lanzamiento.component';

describe('ProximoLanzamientoComponent', () => {
  let component: ProximoLanzamientoComponent;
  let fixture: ComponentFixture<ProximoLanzamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximoLanzamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximoLanzamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
