import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, share } from 'rxjs';
import { Appointment } from 'src/app/shared/interfaces/appointments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  nextAppointments$: Observable<Appointment[]>;


  constructor(public http: HttpClient) {
    const baseUrl = "http://127.0.0.1:3000/";
    const appointmentsUrl = `${baseUrl}appointments?next=true`;

    this.nextAppointments$ = this.http.get<Appointment[]>(appointmentsUrl).pipe(share());
  }
}
