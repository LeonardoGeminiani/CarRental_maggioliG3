import { Injectable } from "@angular/core";
import { Auto, CategoriaAuto } from "../models/auto";

@Injectable()
export class AutoService {
    autoList: Auto[] = [];

    constructor() {
        this.autoList = [
            new Auto(
                1,
                "alfa",
                "giuletta",
                CategoriaAuto.Berlina,
                80,
                "../../../assets/Img/alfa-giuletta-berlina-80.png",
            ),
            new Auto(
                2,
                "audi",
                "a5",
                CategoriaAuto.Berlina,
                110,
                "../../../assets/Img/audi-a5-berlina-110.png",
            ),
            new Auto(
                3,
                "audi",
                "a7",
                CategoriaAuto.Berlina,
                170,
                "../../../assets/Img/audi-a7-berlina-170.png",
            ),
            new Auto(
                4,
                "bmw",
                "5",
                CategoriaAuto.Berlina,
                120,
                "../../../assets/Img/bmw-5-berlina-120.png",
            ),
            new Auto(
                5,
                "bmw",
                "840i",
                CategoriaAuto.Cabrio,
                250,
                "../../../assets/Img/bmw-840i-cabrio-250.png",
            ),
            new Auto(
                6,
                "bmw",
                "x1",
                CategoriaAuto.Suv,
                100,
                "../../../assets/Img/bmw-x1-suv-100.png",
            ),
            new Auto(
                7,
                "bmw",
                "x3",
                CategoriaAuto.Suv,
                120,
                "../../../assets/Img/bmw-x3-suv-120.png",
            ),
            new Auto(
                8,
                "fiat",
                "qubo",
                CategoriaAuto.Van,
                70,
                "../../../assets/Img/fiat-qubo-pulmino-70.png",
            ),
            new Auto(
                9,
                "jeep",
                "renegade",
                CategoriaAuto.Suv,
                80,
                "../../../assets/Img/jeep-renegade-suv-80.png",
            ),
            new Auto(
                10,
                "vw",
                "beetle",
                CategoriaAuto.Cabrio,
                130,
                "../../../assets/Img/vw-beetle-cabrio-130.png",
            ),
            new Auto(
                11,
                "vw",
                "caravelle",
                CategoriaAuto.Van,
                120,
                "../../../assets/Img/vw-caravelle-pulmino-120.png",
            ),
            new Auto(
                12,
                "vw",
                "golf",
                CategoriaAuto.Berlina,
                80,
                "../../../assets/Img/vw-golf-berlina-80.png",
            ),
            new Auto(
                13,
                "vw",
                "t",
                CategoriaAuto.Suv,
                150,
                "../../../assets/Img/vw-t-roc-cabrio-150.png",
            ),
            new Auto(
                14,
                "vw",
                "touran",
                CategoriaAuto.Van,
                125,
                "../../../assets/Img/vw-touran-pulmino-125.png",
            ),
        ]
    }

    get auto() {
        return this.autoList;
    }

    get categorie(): {str: string, indx: number}[] {
        let ret: {str: string, indx: number}[] = [];
        let arr = Object.values(CategoriaAuto);
        let l = arr.length / 2;
        for (let i = 0; i < l; i++) ret.push({
            str: arr[i].toString(),
            indx: i
        });
        return ret;
    }

    RemoveAuto(id: CategoriaAuto) {
        this.autoList = this.autoList.filter(el => el.id !== id);
    }
}