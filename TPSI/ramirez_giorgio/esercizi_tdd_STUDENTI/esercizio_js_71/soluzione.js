export class Poligono {
   constructor(lato, nlati, nfisso) {
      this.lato = lato;
      this.nlati = nlati;
      this.nfisso = nfisso;   
   }

   perimetro() {
      let p = this.lato * this.nlati;
      console.log(`Perimetro: ${p} cm`);  
      return p;
   }

   area() {
      let p = this.lato * this.nlati;
      let apotema = this.lato * this.nfisso;
      let a = (p * apotema) / 2;
      console.log(`Area: ${Math.round(a)} cm^2`);
      return a;
   }
}

export class TriangoloEquilatero extends Poligono {
    constructor(lato) { super(lato, 3, 0.289); }
}

export class Quadrato extends Poligono {
    constructor(lato) { super(lato, 4, 0.5); }
}

export class Pentagono extends Poligono {
    constructor(lato) { super(lato, 5, 0.688); }
}

export class Esagono extends Poligono {
    constructor(lato) { super(lato, 6, 0.866); }
}

export class Ettagono extends Poligono {
    constructor(lato) { super(lato, 7, 1.038); }
}

export class Ottagono extends Poligono {
    constructor(lato) { super(lato, 8, 1.207); }
}

console.log("Triangolo Equilatero lato 15 cm ");
let tri = new TriangoloEquilatero(15);
tri.perimetro();
tri.area();

console.log("\nQuadratlato lato 10 cm");
let qua = new Quadrato(10);
qua.perimetro();
qua.area();

console.log("\nPentagono lato 21 cm");
let pen = new Pentagono(21);
pen.perimetro();
pen.area();

console.log("\nEsagono lato 18 cm");
let esa = new Esagono(18);
esa.perimetro();
esa.area();

console.log("\nEttagono lato 9 cm");
let ett = new Ettagono(9);
ett.perimetro();
ett.area();

console.log("\nOttagono lato 12 cm");
let ott = new Ottagono(12);
ott.perimetro();
ott.area();