import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';





const materialModules = [
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  NgxMaterialTimepickerModule,
  MatSelectModule,
  MatDialogModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
