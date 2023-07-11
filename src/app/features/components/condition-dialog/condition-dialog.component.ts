import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClinicalCondition } from 'src/app/shared/interfaces/clinicalConditions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { conditionStatusTextById } from 'src/app/shared/constants/conditionStatusTextById';

@Component({
  selector: 'app-condition-dialog',
  templateUrl: './condition-dialog.component.html',
  styleUrls: ['./condition-dialog.component.css']
})
export class ConditionDialogComponent implements OnInit {
  condition: ClinicalCondition | null;
  clinicalConditionForm: FormGroup;
  editing: Boolean;
  conditionStatusText = conditionStatusTextById;


  constructor(
    private dialogRef: MatDialogRef<ConditionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: ClinicalCondition | null
  ) { this.condition = data; }


  ngOnInit(): void {
    this.initializeForm();
    this.editing = this.condition ? true : false
  }


  initializeForm() {
    this.clinicalConditionForm = new FormGroup({
      'name': new FormControl(this.condition?.name || '', [Validators.required]),
      'description': new FormControl(this.condition?.description || '', []),
      'clinicalConditionStatusId': new FormControl(this.condition?.clinicalConditionStatusId || '', [Validators.required]),
    })
  }


  close() {
    this.dialogRef.close(this.clinicalConditionForm.value);
  }


}
