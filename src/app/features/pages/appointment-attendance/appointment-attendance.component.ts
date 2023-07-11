import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/shared/interfaces/appointments';
import { AppointmentsService } from '../../services/appointments.service';
import { Observable } from 'rxjs';
import { ClinicalCondition } from 'src/app/shared/interfaces/clinicalConditions';
import { Prescription } from 'src/app/shared/interfaces/prescriptions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConditionDialogComponent } from '../../components/condition-dialog/condition-dialog.component';
import { PrescriptionDialogComponent } from '../../components/prescription-dialog/prescription-dialog.component';
import { PrescriptionsService } from '../../services/prescriptions.service';
import { ClinicalConditionsService } from '../../services/clinical-conditions.service';

interface ClinicalConditionsTracker {
  [key: string]: ClinicalCondition[] | number[] | string[]
  edit: ClinicalCondition[],
  create: ClinicalCondition[],
  delete: Array<number>
}

interface PrescriptionsTracker {
  edit: Prescription[],
  create: Prescription[],
  delete: number[] | string[]
}

@Component({
  selector: 'app-appointment-attendance',
  templateUrl: './appointment-attendance.component.html',
  styleUrls: ['./appointment-attendance.component.css']
})
export class AppointmentAttendanceComponent implements OnInit {
  appointment$: Observable<Appointment>;
  appointment: Appointment;
  clinicalConditionsTracker: ClinicalConditionsTracker = { edit: [], create: [], delete: [] };
  prescriptionsTracker: PrescriptionsTracker = { edit: [], create: [], delete: [] };
  dialogConfig = new MatDialogConfig();


  constructor(
    private route: ActivatedRoute,
    private appointmentsService: AppointmentsService,
    private prescriptionsService: PrescriptionsService,
    private conditionsService: ClinicalConditionsService,
    private dialog: MatDialog
  ) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
  }

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment() {
    const appointmentId = this.route.snapshot.params['id'];
    this.appointment$ = this.appointmentsService.getAppointmentById(appointmentId);

    this.appointment$.subscribe((appointment) => {
      this.appointment = this.deepCopy(appointment);
    });
  }

  createClinicalCondition() {
    const dialogRef = this.dialog.open(ConditionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      const conditionObject = this.insertIds(result);
      const postResult = this.conditionsService.createClinicalCondition(conditionObject);
      postResult.subscribe(res => {
        this.clinicalConditionsTracker.create.push(conditionObject);

      })

    })
  }

  openClinicalCondition(condition: ClinicalCondition) {
    const dialogRef = this.dialog.open(
      ConditionDialogComponent,
      { data: condition });
    dialogRef.afterClosed().subscribe(result => {
      const transient = this.insertIds(result);
      const clinicalConditionObject = {
        ...transient,
        id: condition.id
      };

      const patrchResult = this.conditionsService.editClinicalCondition(clinicalConditionObject);
      patrchResult.subscribe(res => {
      })

      this.clinicalConditionsTracker.edit.push(clinicalConditionObject);
    });
  }

  insertIds(result: any) {
    const resultWithIds = {
      ...result,
      userId: this.appointment.doctor.id,
      pacientId: this.appointment.pacient.id,
      appointmentId: this.appointment.appointmentId,
    };
    return resultWithIds;
  }

  createPrescription() {
    const dialogRef = this.dialog.open(PrescriptionDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      const postObject = this.insertIds(result);
      const postResult = this.prescriptionsService.postPrescriptions(postObject);
      postResult.subscribe((res) => {
        this.prescriptionsTracker.create.push(postObject);
      });
    })
  }

  openPrescription(prescription: Prescription) {
    const dialogRef = this.dialog.open(PrescriptionDialogComponent, { data: prescription });
    dialogRef.afterClosed().subscribe(result => {
      const transient = this.insertIds(result);
      const prescriptionObject = {
        ...transient,
        id: prescription.id
      };

      this.prescriptionsTracker.edit.push(prescriptionObject);
      const patchResult = this.prescriptionsService.editPrescription(prescriptionObject);
      patchResult.subscribe(result => {})
    });
  }

  deletePrescription(prescriptionId: string | number) {
    const deleteResult = this.prescriptionsService.deletePrescription(prescriptionId);
    deleteResult.subscribe(res => {
    })
  }

  deleteClinicalCondition (conditionId: number | string) {
    const result = this.conditionsService.deleteClinicalCondition(conditionId);
    result.subscribe(res => {
    })
  }


  deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
