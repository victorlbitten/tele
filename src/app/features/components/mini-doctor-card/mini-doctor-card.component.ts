import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/interfaces/doctors';

@Component({
  selector: 'app-mini-doctor-card',
  templateUrl: './mini-doctor-card.component.html',
  styleUrls: ['./mini-doctor-card.component.css']
})
export class MiniDoctorCardComponent {
  @Input() doctor: User;
  @Input() small = false;
  @Input() extraSmall = false;
  @Input() bordered = true;
}
