export class Automobile {
    constructor(marca, modello, colore, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }
    accendi() {
        console.log(`La ${this.marca} ${this.modello} è accesa.`);
    }
    percorriKm(km) {
        this.chilometraggio += km;
        console.log(`Hai percorso ${km} km. Il chilometraggio totale è ora ${this.chilometraggio} km.`);
    }
    visualizzaInfo() {
        console.log(`Auto: ${this.marca} ${this.modello}, Colore: ${this.colore}, Anno: ${this.anno}, Km: ${this.chilometraggio}`);
    }
}
const auto1 = new Automobile("Fiat", "500", "Bianco", 2020, 15000);
const auto2 = new Automobile("Ford", "Focus", "Nero", 2018, 50000);
const auto3 = new Automobile("Tesla", "Model 3", "Rosso", 2022, 5000);
const auto4 = new Automobile("BMW", "Serie 3", "Grigio", 2019, 30000);
const auto5 = new Automobile("Audi", "A4", "Blu", 2021, 10000);

const parcoAuto = [auto1, auto2, auto3, auto4, auto5];
parcoAuto.forEach((auto, index) => {
    console.log(`Auto ${index + 1}`);
    auto.visualizzaInfo();
    auto.accendi();
    auto.percorriKm(100);
});
