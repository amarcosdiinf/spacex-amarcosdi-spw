import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripulacionModalSelectorComponent } from './tripulacion-modal-selector.component';

describe('TripulacionModalSelectorComponent', () => {
  let component: TripulacionModalSelectorComponent;
  let fixture: ComponentFixture<TripulacionModalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripulacionModalSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripulacionModalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
