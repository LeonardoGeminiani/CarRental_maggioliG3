import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Auto, CategoriaAuto } from 'src/app/models/auto';

import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-auto-modale[auto]',
  templateUrl: './auto-modale.component.html',
  styleUrls: ['./auto-modale.component.css']
})
export class AutoModaleComponent {
  @Input() auto?: Auto;
  @Input() editable?: boolean;
  @Output() closeEvent = new EventEmitter();

  @ViewChild('input') el?: ElementRef;

  Close() {
    this.closeEvent.emit();
    if (this.auto && this.el) {
      this.auto.descrizione = this.el.nativeElement.textContent ?? "";
      this.el.nativeElement.textContent = "";
    }
    console.log(this.auto?.descrizione, this.auto, this.el?.nativeElement.textContent, this.el);
  }

  get categoria() {
    return CategoriaAuto[this.auto?.categoria ?? 0];
  }

  get descrizione() {
    return this.auto?.descrizione ?? "";
  }
}
