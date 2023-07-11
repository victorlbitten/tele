import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { UiElementsModule } from '../shared/modules/ui-elements/ui-elements.module';
import { ReactiveFormsModule } from '@angular/forms';

const coreModuleComponents = [
  NavigationBarComponent,
  AddUserDialogComponent,
]



@NgModule({
  declarations: [
    NavigationBarComponent,
    AddUserDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UiElementsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...coreModuleComponents
  ]
})
export class CoreModule { }
