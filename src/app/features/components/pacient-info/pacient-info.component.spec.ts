import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientInfoComponent } from './pacient-info.component';

describe('PacientInfoComponent', () => {
  let component: PacientInfoComponent;
  let fixture: ComponentFixture<PacientInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientInfoComponent]
    });
    fixture = TestBed.createComponent(PacientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
