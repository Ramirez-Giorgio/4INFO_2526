// Automobile come Object Literal
const Automobile = {
    marca: "Ferrari",
    modello: "Roma",
    anno: 2024,
    colore: "Rosso",
    km: 0,
    descrivi() {
        console.log(
            this.marca + " " +
            this.modello +
            ", anno " + this.anno +
            ", colore " + this.colore
            );
    },
    guida(kmPercorsi) {
        this.km += kmPercorsi;
        console.log("Hai guidato per " + kmPercorsi + " km. Totale: " + this.km + " km.");
    },
    cambiaColore(nuovoColore) {
        this.colore = nuovoColore;
        console.log("Nuovo colore impostato: " + this.colore);
  }
};
