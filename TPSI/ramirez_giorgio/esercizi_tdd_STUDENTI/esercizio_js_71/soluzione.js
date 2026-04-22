export class Poligono {
   constructor(cm, nlati, nfisso) {
      this.cm = cm;
      this.nlati = nlati;
      this.nfisso = nfisso;   
   }

   perimetro() {
      let p = this.cm * this.nlati;
      console.log(`Perimetro: ${p} cm`);  
      return p;
   }

   area() {
      let p = this.cm * this.nlati;
      let apotema = this.cm * this.nfisso;
      let a = (p * apotema) / 2;
      console.log(`Area: ${Math.round(a)} cm^2`);
      return a;
   }
}

export class TriangoloEquilatero extends Poligono {
    constructor(cm) { super(cm, 3, 0.289); }
}

export class Quadrato extends Poligono {
    constructor(cm) { super(cm, 4, 0.5); }
}

export class Pentagono extends Poligono {
    constructor(cm) { super(cm, 5, 0.688); }
}

export class Esagono extends Poligono {
    constructor(cm) { super(cm, 6, 0.866); }
}

export class Ettagono extends Poligono {
    constructor(cm) { super(cm, 7, 1.038); }
}

export class Ottagono extends Poligono {
    constructor(cm) { super(cm, 8, 1.207); }
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