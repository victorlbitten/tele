import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { PacientsComponent } from './pages/pacients/pacients.component';
import { CoreModule } from '../core/core.module';

import { UiElementsModule } from '../shared/modules/ui-elements/ui-elements.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ClinicalConditionsComponent } from './components/clinical-conditions/clinical-conditions.component';
import { ClinicalConditionComponent } from './components/clinical-conditions/clinical-condition/clinical-condition.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { RouterModule } from '@angular/router';
import { PacientCardComponent } from './components/pacient-card/pacient-card.component';
import { MiniDoctorCardComponent } from './components/mini-doctor-card/mini-doctor-card.component';
import { PacientDetailsComponent } from './pages/pacient-details/pacient-details.component';
import { CreateAppointmentComponent } from './pages/create-appointment/create-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentAttendanceComponent } from './pages/appointment-attendance/appointment-attendance.component';
import { PacientInfoComponent } from './components/pacient-info/pacient-info.component';
import { ConditionDialogComponent } from './components/condition-dialog/condition-dialog.component';
import { PrescriptionDialogComponent } from './components/prescription-dialog/prescription-dialog.component';
import { PrescriptionComponent } from './components/prescriptions/prescription/prescription.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppointmentsComponent,
    PacientsComponent,
    ClinicalConditionsComponent,
    ClinicalConditionComponent,
    PrescriptionsComponent,
    AppointmentComponent,
    PacientCardComponent,
    MiniDoctorCardComponent,
    PacientDetailsComponent,
    CreateAppointmentComponent,
    AppointmentAttendanceComponent,
    PacientInfoComponent,
    ConditionDialogComponent,
    PrescriptionDialogComponent,
    PrescriptionComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    UiElementsModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
