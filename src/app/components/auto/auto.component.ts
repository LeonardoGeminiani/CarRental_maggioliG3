import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auto, CategoriaAuto } from 'src/app/models/auto';
import { AutoService, Ordine } from 'src/app/services/auto.service';


@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {

  Categoria: CategoriaAuto = 0;
  Marca: string = '';
  Modello: string = '';
  SelectedOr: Ordine = Ordine.Alfabetico;
  private _autoList: Auto[];

  get autoList(){
    return this._autoList;
  }

  get categorie(): {str: string, indx: number}[] {
    return this.service.categorie;
  }

  constructor(private route: ActivatedRoute, private service: AutoService){
    this.route.queryParamMap.subscribe(params => {
      this.Categoria = Number(params.get('c')) ?? undefined;
    });
    this._autoList = this.service.SortAutoList(
      this.service.autoList,
      this.SelectedOr
    );
  }

  StringCategoria(c: CategoriaAuto): string {
    return Object.values(CategoriaAuto)[c as number].toString();
  }
  
  FormSubmit() {
    this._autoList = this.service.FilterAutoList(
      this.Marca,
      this.Modello,
      this.SelectedOr
    )
  }
}
