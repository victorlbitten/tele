import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDoctorCardComponent } from './mini-doctor-card.component';

describe('MiniDoctorCardComponent', () => {
  let component: MiniDoctorCardComponent;
  let fixture: ComponentFixture<MiniDoctorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniDoctorCardComponent]
    });
    fixture = TestBed.createComponent(MiniDoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
