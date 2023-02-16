import { Component, Input } from '@angular/core';
import { Auto } from 'src/app/models/auto';

@Component({
  selector: 'app-auto-modal[auto]',
  templateUrl: './auto-modale.component.html',
  styleUrls: ['./auto-modale.component.css']
})
export class AutoModaleComponent {
  @Input() auto?: Auto;

  
}
