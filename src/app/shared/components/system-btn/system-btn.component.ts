import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-system-btn',
  templateUrl: './system-btn.component.html',
  styleUrls: ['./system-btn.component.css']
})
export class SystemBtnComponent {
  @Input() small = false;
  @Input() warning = false;
  @Input() affirmative = false;
  @Input() warningOutlined = false;
  @Input() affirmativeOutlined = false;
  @Input() round = false;
}
