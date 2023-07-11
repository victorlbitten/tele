import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/shared/interfaces/appointments';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  @Input() appointment: Appointment;
  @Input() attendable = false;
  @Input() editable = false;
  appointmentDay: string;
  appointmentTime = {
    start: '',
    end: ''
  };

  constructor (private route: Router) {}

  ngOnInit(): void {
    const appointmentStart = new Date(this.appointment.startDate);
    const appointmentEnd = new Date(this.appointment.endDate);
    const options: any = { year: 'numeric', month: 'numeric', day: 'numeric' };


    this.appointmentDay = appointmentStart.toLocaleDateString('pt-BR', options);
    this.appointmentTime = {
      start: appointmentStart.toLocaleTimeString('pt-BR'),
      end: appointmentEnd.toLocaleTimeString('pt-BR')
    }
  }
}
