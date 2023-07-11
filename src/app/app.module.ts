import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { AppointmentsComponent } from './features/pages/appointments/appointments.component';
import { PacientsComponent } from './features/pages/pacients/pacients.component';
import { UiElementsModule } from './shared/modules/ui-elements/ui-elements.module';
import { FeaturesModule } from './features/features.module';
import { PacientDetailsComponent } from './features/pages/pacient-details/pacient-details.component';
import { CreateAppointmentComponent } from './features/pages/create-appointment/create-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentAttendanceComponent } from './features/pages/appointment-attendance/appointment-attendance.component';





const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'pacients/:id', component: PacientDetailsComponent},
  { path: 'pacients', component: PacientsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointments/new', component: CreateAppointmentComponent },
  { path: 'appointments/:id/attendance', component: AppointmentAttendanceComponent },
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FeaturesModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    UiElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
