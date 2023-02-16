import { Component } from '@angular/core';
import { Auto } from 'src/app/models/auto';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  autoListCopy: Auto[];

  constructor(private service: AutoService){
    this.autoListCopy = this.service.autoList;
  }

  get categorie(): {str: string, indx: number}[] {
    return this.service.categorie;
  }
  
  StringCategoria = AutoService.StringCategoria;

  Elimina(a: Auto){
    this.autoListCopy = this.autoListCopy.filter(el => el.id !== a.id );
  }

  Salva(){
    this.service.autoList = this.autoListCopy;
  }
}
