export enum CategoriaAuto {
    Tutte,
    Suv,
    Berlina,
    Van,
    Cabrio,
    Supercar,
    Bassocosto
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
        public descrizione: string,
        public listaOptional: {nome: string, costo: number}[]
    ){}

    // edit listaOptional:
    set SlOptional(s: string) {
        let arr: {nome: string, costo: number}[] = [];
        let sarr = s.split(',');
        let i = 0;
        sarr.forEach(el => {
            let a = el.split(':');
            if(a.length === 1) return;
            arr.push({
                nome: a[0].trim(),
                costo: +a[1]
            });
            if(Number.isNaN(arr[i].costo)){
                return;  
            } 
            ++i;
        });
        this.listaOptional = arr;
    }

    // getting listaOptional of edit:
    get SlOptional(): string {
        let ret: string = "";
        this.listaOptional.forEach((el,i) => {
            ret += `${el.nome}: ${el.costo}`;
            if(i !== this.listaOptional.length-1) ret += ",";
        });
        return ret;
    }
}