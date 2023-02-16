export enum CategoriaAuto {
    Suv,
    Berlina,
    Van,
    Cabrio,
    Supercar,
    Bassocosto,
}

export class Auto
{
    constructor (
        public id: number,
        public marca: string,
        public modello: string,
        public categoria: CategoriaAuto,
        public prezzo: number,
        public immagine: string,
        public descrizione: string
    ){}
}