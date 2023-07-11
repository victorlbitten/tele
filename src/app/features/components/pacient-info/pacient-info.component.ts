import { Component, Input } from '@angular/core';
import { Pacient } from 'src/app/shared/interfaces/pacients';

@Component({
  selector: 'app-pacient-info',
  templateUrl: './pacient-info.component.html',
  styleUrls: ['./pacient-info.component.css']
})
export class PacientInfoComponent {
  @Input() pacient: Pacient;
}
