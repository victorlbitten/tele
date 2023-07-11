import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalConditionsComponent } from './clinical-conditions.component';

describe('ClinicalConditionComponent', () => {
  let component: ClinicalConditionsComponent;
  let fixture: ComponentFixture<ClinicalConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalConditionsComponent]
    });
    fixture = TestBed.createComponent(ClinicalConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
