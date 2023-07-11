import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAttendanceComponent } from './appointment-attendance.component';

describe('AppointmentAttendanceComponent', () => {
  let component: AppointmentAttendanceComponent;
  let fixture: ComponentFixture<AppointmentAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentAttendanceComponent]
    });
    fixture = TestBed.createComponent(AppointmentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
