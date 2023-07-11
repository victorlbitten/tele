import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { appointmentsUrl } from 'src/app/shared/constants/urls';
import { Appointment } from 'src/app/shared/interfaces/appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  allAppointments$: Observable<Appointment[]>;

  constructor (private http: HttpClient) { }

  getAllAppointments () {
    this.allAppointments$ = this.http.get<Appointment[]>(appointmentsUrl);

    return this.allAppointments$;
  }

  getAppointmentById (appointmentId: number | string) {
    const getUrl = `${appointmentsUrl}/${appointmentId}`
    return this.http.get<Appointment>(getUrl).pipe(share());
  }
}
