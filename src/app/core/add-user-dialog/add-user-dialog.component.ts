import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConditionDialogComponent } from 'src/app/features/components/condition-dialog/condition-dialog.component';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit{
  userForm : FormGroup;
  pacientForm: FormGroup;

  showUsersForm = true;

  constructor (
    private http: HttpClient,
    private dialogRef: MatDialogRef<ConditionDialogComponent>,
    ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      specialization: new FormControl(null, Validators.required),
      crm: new FormControl(null, Validators.required),
    });

    this.pacientForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      additionalInfo: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    if(this.showUsersForm) {
      this.submitUser();
      return;
    }

    this.submitPacient();
  }

  showDoctorsForm () { this.showUsersForm = true };
  showPacientsForm () { this.showUsersForm = false };

  submitUser() {
    const baseUrl = "http://127.0.0.1:3000/users";
    
    const postObject = this.userForm.value;
    this.http.post(baseUrl, postObject).subscribe((res) => {
      this.dialogRef.close();
    });
  }

  submitPacient() {
    const baseUrl = "http://127.0.0.1:3000/pacients";
    const value = this.pacientForm.value;
    const birthDateIso = value.birthDate.toISOString();
    const dateToSend = birthDateIso.split('T')[0];
    const postObject = {
      generalInfo: {
        name: value.name,
        sex: value.sex,
        birthdate: dateToSend
      },
      address: {
        street: value.street,
        number: value.number,
        aditionalInfo: value.additionalInfo,
        city: value.city,
        zipCode: value.zipCode
      }
    };
    this.http.post(baseUrl, postObject).subscribe((res) => {
      this.dialogRef.close();
    });
  }

  normalizeDateAndTimeToSqlFormat (date: any, time: any) {
    const dateYYYYMMDD = date.toISOString().split('T')[0];
    const timeToIsoStringParts = new Date(dateYYYYMMDD + ' ' + time + ' GMT+0:00').toISOString().split('T');
    const finalString = timeToIsoStringParts[0] + ' ' + timeToIsoStringParts[1].slice(0, -5);
    return finalString;
  }

}
