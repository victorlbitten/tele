import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, share } from 'rxjs';
import { Appointment } from 'src/app/shared/interfaces/appointments';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  allAppointments$: Observable<Appointment[]>;


  constructor(public http: HttpClient) {
    const baseUrl = "http://127.0.0.1:3000/";
    const appointmentsUrl = `${baseUrl}appointments`;

    this.allAppointments$ = this.http.get<Appointment[]>(appointmentsUrl).pipe(share());
  }
}
