import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { User } from './shared/interfaces/doctors';
import { Pacient } from './shared/interfaces/pacients';
import { Appointment } from './shared/interfaces/appointments';
import { Prescription } from './shared/interfaces/prescriptions';
import { AppointmentsService } from './features/services/appointments.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users$: Observable<User[]>;
  pacients$: Observable<Pacient[]>;
  appointments$: Observable<Appointment[]>;
  prescriptions$: Observable<Prescription[]>;


  constructor(private appointmentsService: AppointmentsService) {
    const baseUrl = "http://127.0.0.1:3000/";
    const usersUrl = `${baseUrl}users/`;
    const pacientsUrl = `${baseUrl}pacients/`;
    const prescriptionsUrl = `${baseUrl}prescriptions/`;

    // this.users$ = this.http.get<User[]>(usersUrl).pipe(share());
    // this.pacients$ = this.http.get<Pacient[]>(pacientsUrl).pipe(share());
    // this.prescriptions$ = this.http.get<Prescription[]>(prescriptionsUrl).pipe(share());
  }

  ngOnInit(): void {
    this.appointments$ = this.appointmentsService.getAllAppointments();

  }
  title = 'telessaude';
}
