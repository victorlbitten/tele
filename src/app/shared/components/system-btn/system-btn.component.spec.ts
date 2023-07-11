import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemBtnComponent } from './system-btn.component';

describe('SystemBtnComponent', () => {
  let component: SystemBtnComponent;
  let fixture: ComponentFixture<SystemBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemBtnComponent]
    });
    fixture = TestBed.createComponent(SystemBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
