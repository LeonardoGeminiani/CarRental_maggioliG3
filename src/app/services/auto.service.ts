import { Injectable } from "@angular/core";
import { Auto, CategoriaAuto } from "../models/auto";

@Injectable()
export class AutoService {
    autoList: Auto[] = [];

    constructor(){
        this.autoList = [
        ]   
    }

    get auto() {
        return this.autoList;
    }

    RemoveAuto(id: CategoriaAuto) {
        this.autoList = this.autoList.filter(el => el.id !== id);
    }
}