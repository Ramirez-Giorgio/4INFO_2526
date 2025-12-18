let autombile = {
    marca : "fiat", modello :"panda", colore :"nero", anno : "2010", km : "2500",
    descrizione(){
    console.log(`la macchina ${this.marca}, modello ${this.modello}, di colore ${this.colore} ed anno ${this.anno}, ha percorso ${this.km}km`)
    }
}
autombile.descrizione();