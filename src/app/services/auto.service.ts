import { Injectable } from "@angular/core";
import { Auto, CategoriaAuto } from "../models/auto";

export enum Ordine {
    PCrescente,
    PDecrescente,
    Alfabetico
}

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
                "Ritieni la bellezza impareggiabile dell'Alfa Romeo Giulietta: un'esperienza di guida unica, dettagli stilistici che trasmettono un'eleganza senza pari e una potenza senza rivali. Sperimenta l'eccezionale comfort e la tecnologia all'avanguardia per un'esperienza di guida senza limiti. L'Alfa Romeo Giulietta è l'unione perfetta di stile, comfort e potenza.",
                [{nome: "Cambio automatico", costo: 10}, {nome: "Tetto panoramico", costo: 20}]
            ),
            new Auto(
                2,
                "audi",
                "a5",
                CategoriaAuto.Berlina,
                110,
                "../../../assets/Img/audi-a5-berlina-110.png",
                "Scopri la nuova Audi A5 Berlina: una fusione perfetta tra eleganza, tecnologia, stile e comfort. Una vettura che rappresenta l'eccellenza dell'innovazione tedesca, in grado di offrire una guida sicura e un'esperienza di guida unica. Scopri la nuova Audi A5 Berlina e sperimenta l'eccellenza della guida tedesca.",
                [{nome: "Cambio automatico", costo: 10}, {nome: "Tetto panoramico", costo: 20}]
            ),
            new Auto(
                3,
                "audi",
                "a7",
                CategoriaAuto.Berlina,
                170,
                "../../../assets/Img/audi-a7-berlina-170.png",
                "Scopri la nuova Audi A7: la berlina di lusso che unisce comfort e stile senza compromessi. Con la sua linea elegante e i dettagli di design all'avanguardia, l'Audi A7 unisce tecnologia all'avanguardia e prestazioni eccezionali per un'esperienza di guida senza pari. Unendo lusso, comfort ed eleganza, l'Audi A7 è la scelta ideale per un'esperienza di guida senza compromessi.",
                [{nome: "Cambio automatico", costo: 10}, {nome: "Tetto panoramico", costo: 20}]
            ),
            new Auto(
                4,
                "bmw",
                "5",
                CategoriaAuto.Berlina,
                120,
                "../../../assets/Img/bmw-5-berlina-120.png",
                "Scopri la quintessenza della guida di lusso con la BMW 5 Berlina. Un design innovativo e una potenza eccezionale si uniscono per creare un'esperienza di guida senza pari. La BMW 5 Berlina è la scelta perfetta per chi ricerca una guida sicura, elegante e confortevole. Libera la tua passione per la guida con la BMW 5 Berlina.",
                [{nome: "Cambio automatico", costo: 10}, {nome: "Tetto panoramico", costo: 20}]
            ),
            new Auto(
                5,
                "bmw",
                "840i",
                CategoriaAuto.Cabrio,
                250,
                "../../../assets/Img/bmw-840i-cabrio-250.png",
                "Scopri la BMW 8 Series Coupé 840i: un'esperienza di guida unica, che unisce lusso e tecnologia all'avanguardia per offrirti un viaggio indimenticabile. Goditi il comfort delle sedili in pelle di prima qualità, gli eccezionali sistemi di sicurezza e le prestazioni di guida di alto livello. La BMW 8 Series Coupé 84oi è il lusso a quattro ruote.",
                [{nome: "Cambio automatico", costo: 10}, {nome: "Tetto panoramico", costo: 20}]
            ),
            new Auto(
                6,
                "bmw",
                "x1",
                CategoriaAuto.Suv,
                100,
                "../../../assets/Img/bmw-x1-suv-100.png",
                "Scopri la BMW X1: un SUV compatto ma imponente, ricco di stile, tecnologia e prestazioni. Dotato di caratteristiche innovative, è una macchina che non deluderà le tue aspettative, pronto a garantirti un'esperienza di guida unica. Scegli il tuo SUV BMW X1 e vivi l'eccellenza al volante.",
                [{nome: "Cambio automatico", costo: 10}]
            ),
            new Auto(
                7,
                "bmw",
                "x3",
                CategoriaAuto.Suv,
                120,
                "../../../assets/Img/bmw-x3-suv-120.png",
                "Scopri la BMW X3, un SUV di grande successo che unisce comfort, prestazioni dinamiche eccezionali e tecnologia di ultima generazione. Unisci la tua passione per l'avventura con un design audace e una tecnologia di guida unica e scopri un'esperienza di guida senza precedenti. La BMW X3 è il SUV che offre tutto ciò che desideri.",
                [{nome: "Cambio automatico", costo: 10}]
            ),
            new Auto(
                8,
                "fiat",
                "qubo",
                CategoriaAuto.Van,
                70,
                "../../../assets/Img/fiat-qubo-pulmino-70.png",
                "La Fiat Qubo è un'esperienza di guida moderna e pratica. Unisciti a noi per scoprire come la tecnologia avanzata e l'eccellente design si fondono per offrirti un'esperienza di guida confortevole ed efficiente. La Fiat Qubo è il modo perfetto per raggiungere i tuoi obiettivi in modo moderno e pratico.",
                []
            ),
            new Auto(
                9,
                "jeep",
                "renegade",
                CategoriaAuto.Suv,
                80,
                "../../../assets/Img/jeep-renegade-suv-80.png",
                "Scopri l'avventura con la Jeep Renegade: un SUV dal design unico, perfettamente bilanciato tra robustezza e versatilità, che offre una guida sicura e divertente per qualsiasi terreno. Una moderna Jeep pensata per esplorare ogni destinazione.",
                [{nome: "Cambio automatico", costo: 10}]
            ),
            new Auto(
                10,
                "vw",
                "beetle",
                CategoriaAuto.Cabrio,
                130,
                "../../../assets/Img/vw-beetle-cabrio-130.png",
                "La Volkswagen Beetle è la vettura iconica che coniuga stile e comfort: una moderna interpretazione di un'auto che ha segnato la storia. Qui potrai goderti un'esperienza di guida unica, con l'affidabilità della tecnologia Volkswagen e la sicurezza di una vettura che ha già dimostrato il suo valore. Vivi il tuo viaggio con la Volkswagen Beetle.",
                []
            ),
            new Auto(
                11,
                "vw",
                "caravelle",
                CategoriaAuto.Van,
                120,
                "../../../assets/Img/vw-caravelle-pulmino-120.png",
                "La Volkswagen Caravelle è un'esperienza di guida unica. Una combinazione di lusso, comfort e stile, la Caravelle è l'ideale per tutte le tue esigenze di trasporto. Dotata di un design moderno e di tecnologia all'avanguardia, la Volkswagen Caravelle offre un'esperienza di guida unica. Scegli la Caravelle e scopri la perfetta armonia tra comfort, stile e alte prestazioni.",
                [{nome: "Cambio automatico", costo: 10}]
            ),
            new Auto(
                12,
                "vw",
                "golf",
                CategoriaAuto.Berlina,
                80,
                "../../../assets/Img/vw-golf-berlina-80.png",
                "La Volkswagen Golf è progettata per offrirti una guida fluida con un design unico e una tecnologia innovativa. La tua esperienza di guida sarà unica e divertente grazie alla combinazione di stile ed efficienza che la Golf ha da offrire. La Golf è un'auto che consente di esprimere la tua personalità mentre porti a casa una straordinaria qualità di guida.",
                []
            ),
            new Auto(
                13,
                "vw",
                "t",
                CategoriaAuto.Suv,
                150,
                "../../../assets/Img/vw-t-roc-cabrio-150.png",
                "Scopri la nuova Volkswagen T: un'auto moderna, spaziosa e robusta che offre prestazioni eccezionali. Dotata di tecnologia avanzata, design innovativo e comfort di prima classe, la T è la vettura perfetta per le tue esigenze di viaggio. Scegli la Volkswagen T e sperimenta una guida esperta ed esaltante.",
                [{nome: "Cambio automatico", costo: 10}]
            ),
            new Auto(
                14,
                "vw",
                "touran",
                CategoriaAuto.Van,
                125,
                "../../../assets/Img/vw-touran-pulmino-125.png",
                "La Volkswagen Touran è la scelta ideale per chi cerca un'auto da famiglia spaziosa e affidabile: un veicolo moderno che coniuga un design all'avanguardia con tecnologie di ultima generazione che offrono un'esperienza di guida confortevole e sicura. Scopri la Touran e sperimenta la versatilità e l'affidabilità che solo Volkswagen può offrire.",
                []
            ),
        ]
    }

    static StringCategoria(c: CategoriaAuto): string {
        return Object.values(CategoriaAuto)[c as number].toString();
    }
    get auto() {
        return this.autoList;
    }



    get categorie(): { str: string, indx: number }[] {
        let ret: { str: string, indx: number }[] = [];
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


    FilterAutoList(Marca: string, Modello: string, ordine: Ordine, cat: CategoriaAuto): Auto[] {
        let _autoList = this.autoList;

        if(cat != CategoriaAuto.Tutte) {
            _autoList = _autoList.filter(el => el.categoria == cat);
        }

        if (Marca !== "") {
            _autoList = _autoList.filter(el => el.marca.includes(Marca.toLowerCase()));
        }

        if (Modello !== "") {
            _autoList = _autoList.filter(el => el.modello.includes(Modello.toLowerCase()));
        }

        return this.SortAutoList(_autoList, ordine);
    }

    SortAutoList(autoList: Auto[], ordine: Ordine): Auto[] {
        return autoList.sort(
            ordine == Ordine.Alfabetico ? (a, b) => {
                if (a.modello < b.modello) {
                    return -1;
                }
                if (a.modello > b.modello) {
                    return 1;
                }
                return 0;
            } :
                ordine == Ordine.PCrescente ? (a, b) => {
                    return a.prezzo - b.prezzo;
                } : (a, b) => {
                    return b.prezzo - a.prezzo;
                }
        );
    }
}