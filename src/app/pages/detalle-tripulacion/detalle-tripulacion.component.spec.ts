import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTripulacionComponent } from './detalle-tripulacion.component';

describe('DetalleTripulacionComponent', () => {
  let component: DetalleTripulacionComponent;
  let fixture: ComponentFixture<DetalleTripulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTripulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTripulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
