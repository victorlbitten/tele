import { Component, Input, OnInit } from '@angular/core';
import { Prescription } from 'src/app/shared/interfaces/prescriptions';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit{
  @Input() prescriptions: Prescription[];

  ngOnInit(): void {
  }
}
