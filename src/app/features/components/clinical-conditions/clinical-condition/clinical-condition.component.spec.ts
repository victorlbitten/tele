import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalConditionComponent } from './clinical-condition.component';

describe('ClinicalConditionComponent', () => {
  let component: ClinicalConditionComponent;
  let fixture: ComponentFixture<ClinicalConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalConditionComponent]
    });
    fixture = TestBed.createComponent(ClinicalConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
