import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoSocialComponent } from './company-info-social.component';

describe('CompanyInfoSocialComponent', () => {
  let component: CompanyInfoSocialComponent;
  let fixture: ComponentFixture<CompanyInfoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
