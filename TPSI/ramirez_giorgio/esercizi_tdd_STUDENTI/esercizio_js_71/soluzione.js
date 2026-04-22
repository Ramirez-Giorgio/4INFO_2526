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

let tri = new TriangoloEquilatero(15);
tri.perimetro();
tri.area();

let qua = new Quadrato(10);
qua.perimetro();
qua.area();

let pen = new Pentagono(21);
pen.perimetro();
pen.area();

let esa = new Esagono(18);
esa.perimetro();
esa.area();

let ett = new Ettagono(9);
ett.perimetro();
ett.area();

let ott = new Ottagono(12);
ott.perimetro();
ott.area();