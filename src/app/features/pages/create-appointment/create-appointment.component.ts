import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaterialTimepickerComponent, TimepickerDirective } from 'ngx-material-timepicker';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/doctors';
import { Pacient } from 'src/app/shared/interfaces/pacients';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit{
  doctors$: Observable<User[]>;
  pacients$: Observable<Pacient[]>

  myForm: FormGroup;
  minDate: Date = new Date();

  test: NgxMaterialTimepickerComponent;

  constructor (private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    const baseUrl = "http://127.0.0.1:3000/";
    const usersUrl = `${baseUrl}users`;
    const pacientsUrl = `${baseUrl}pacients/?basic=true`;

    this.doctors$ = this.http.get<User[]>(usersUrl);
    this.pacients$ = this.http.get<Pacient[]>(pacientsUrl);

    this.initializeForm();
  }

  initializeForm () {
    this.myForm = new FormGroup({
      'doctor': new FormControl(null, [Validators.required]),
      'pacient': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'startTime': new FormControl(null, [Validators.required]),
      'endTime': new FormControl(null, [Validators.required])
    });

    this.myForm.valueChanges.subscribe((res) => {
    })
  }

  onSubmit () {
    const date = this.myForm.value.date
    const startTime = this.myForm.value.startTime;
    const endTime = this.myForm.value.endTime;
    
    const postObject = {
      pacientId: this.myForm.value.pacient,
      userId: this.myForm.value.doctor,
      startDate: this.normalizeDateAndTimeToSqlFormat(date, startTime),
      endDate: this.normalizeDateAndTimeToSqlFormat(date, endTime)
    };

    const baseUrl = "http://127.0.0.1:3000/appointments";
    this.http.post(baseUrl, postObject).subscribe((res) => {
      this.route.navigate(['pacients', postObject.pacientId])
    });
  }

  normalizeDateAndTimeToSqlFormat (date: any, time: any) {
    const dateYYYYMMDD = date.toISOString().split('T')[0];
    const timeToIsoStringParts = new Date(dateYYYYMMDD + ' ' + time + ' GMT+0:00').toISOString().split('T');
    const finalString = timeToIsoStringParts[0] + ' ' + timeToIsoStringParts[1].slice(0, -5);
    return finalString;
  }

}
