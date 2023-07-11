import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClinicalCondition } from 'src/app/shared/interfaces/clinicalConditions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { conditionStatusTextById } from 'src/app/shared/constants/conditionStatusTextById';
import { Prescription } from 'src/app/shared/interfaces/prescriptions';

@Component({
  selector: 'app-prescriptions-dialog',
  templateUrl: './prescription-dialog.component.html',
  styleUrls: ['./prescription-dialog.component.css']
})
export class PrescriptionDialogComponent {
  prescription: Prescription | null;
  prescriptionForm: FormGroup;
  editing: Boolean;

  constructor(
    private dialogRef: MatDialogRef<PrescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: Prescription | null
  ) { this.prescription = data; }


  ngOnInit(): void {
    this.initializeForm();
    this.editing = this.prescription ? true : false
  }


  initializeForm() {
    this.prescriptionForm = new FormGroup({
      'medicationName': new FormControl(this.prescription?.medicationName || '', [Validators.required]),
      'timesADay': new FormControl(this.prescription?.timesADay || '', []),
      'dosage': new FormControl(this.prescription?.dosage || '', [Validators.required]),
      'useInstructions': new FormControl(this.prescription?.useInstructions || '', [Validators.required]),
    })
  }


  close() {
    this.dialogRef.close(this.prescriptionForm.value);
  }
}
