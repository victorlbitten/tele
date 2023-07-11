import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionDialogComponent } from './condition-dialog.component';

describe('ConditionDialogComponent', () => {
  let component: ConditionDialogComponent;
  let fixture: ComponentFixture<ConditionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionDialogComponent]
    });
    fixture = TestBed.createComponent(ConditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
