let Automobile = function (marca, modello, colore, km, anno) {
  this.marca = marca;
  this.modello = modello;
  this.colore = colore;
  this.km = km;
  this.anno = anno;
  this.descrizione = function () {
    console.log(`La macchina ${this.marca}, modello ${this.modello}, di colore ${this.colore}, anno ${this.anno}, ha percorso ${this.km} km`);
  };
};
let auto1 = new Automobile("Fiat", "500", "Nero", 12000, 2010);
auto1.descrizione();
