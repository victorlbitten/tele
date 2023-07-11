import { Component, Input } from '@angular/core';
import { Pacient, PacientBroad } from 'src/app/shared/interfaces/pacients';

@Component({
  selector: 'app-pacient-card',
  templateUrl: './pacient-card.component.html',
  styleUrls: ['./pacient-card.component.css']
})
export class PacientCardComponent {
  @Input() pacient: PacientBroad;
  expanded = false;

  toggleExpansionState () {
    this.expanded = !this.expanded
  }
}
