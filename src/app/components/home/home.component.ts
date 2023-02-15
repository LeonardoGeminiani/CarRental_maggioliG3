import { Component } from '@angular/core';
import { CategoriaAuto } from 'src/app/models/auto';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  CAuto: {str: string, indx: number}[] = [];

  constructor(private router: Router, private service: AutoService){
    this.CAuto = service.categorie;
  }
  autoCMenu(c: CategoriaAuto){
    this.router.navigate(['auto'], {
      queryParams: {
        c : c.toString()
      }
    });
    
  }
}
