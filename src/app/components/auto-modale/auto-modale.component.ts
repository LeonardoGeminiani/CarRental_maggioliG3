import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auto, CategoriaAuto } from 'src/app/models/auto';

@Component({
  selector: 'app-auto-modale[auto]',
  templateUrl: './auto-modale.component.html',
  styleUrls: ['./auto-modale.component.css']
})
export class AutoModaleComponent{
  @Input() auto?: Auto;
  @Output() closeEvent = new EventEmitter();

  Close(){
    this.closeEvent.emit();
  }

  get categoria() {
    return CategoriaAuto[this.auto?.categoria ?? 0];
  }
}
