import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientCardComponent } from './pacient-card.component';

describe('PacientCardComponent', () => {
  let component: PacientCardComponent;
  let fixture: ComponentFixture<PacientCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientCardComponent]
    });
    fixture = TestBed.createComponent(PacientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
