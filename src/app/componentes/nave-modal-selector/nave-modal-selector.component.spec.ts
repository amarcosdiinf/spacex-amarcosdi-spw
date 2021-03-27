import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveModalSelectorComponent } from './nave-modal-selector.component';

describe('NaveModalSelectorComponent', () => {
  let component: NaveModalSelectorComponent;
  let fixture: ComponentFixture<NaveModalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveModalSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveModalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
