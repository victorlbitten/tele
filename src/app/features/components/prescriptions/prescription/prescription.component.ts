import { Component, Input } from '@angular/core';
import { Prescription } from 'src/app/shared/interfaces/prescriptions';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {
  @Input() prescription: Prescription;
}



