import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaAuto } from 'src/app/models/auto';
import { AutoService } from 'src/app/services/auto.service';

enum Ordine{
  PCrescente,
  PDecrescente,
  Alfabetico
}

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {

  Categoria?: CategoriaAuto;
  Marca: string = '';
  Modello: string = '';

  get autoList(){
    return this.service.autoList;
  }

  get categorie(): {str: string, indx: number}[] {
    return this.service.categorie;
  }

  constructor(private route: ActivatedRoute, private service: AutoService){
    this.route.queryParamMap.subscribe(params => {
      this.Categoria = Number(params.get('c')) ?? undefined;
    });
    // console.log(Ordine['Alfabetico']);
  }

  StringCategoria(c: CategoriaAuto): string {
    return Object.values(CategoriaAuto)[c as number].toString();
  }
  
  FormSubmit(){
    console.log( this.Marca, this.Modello, this.Categoria);
  }
}
