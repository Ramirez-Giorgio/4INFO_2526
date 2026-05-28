class Enumera {
    enumera() {
        console.log(`Attributi dell'oggetto:`, Object.keys(this));
    }
}

export class Animale extends Enumera {
    constructor(specie, nome, eta) {
        super(); 
        this.specie = specie;
        this.nome = nome;
        this.eta = eta;
    }

    verso() {
        console.log(`${this.nome} sta facendo un verso.`);
    }
    compleanno() {
        this.eta++;
        console.log(`Buon compleanno ${this.nome}! Ora hai ${this.eta} anni.`);
    }
}

export class Automobile extends Enumera {
    constructor(marca, modello, anno) {
        super();
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }
    accendi() {
        console.log(`La ${this.marca} ${this.modello} si è accesa. Vrum!`);
    }
    etaAuto(annoCorrente) {
        const anni = annoCorrente - this.anno;
        console.log(`Questa auto ha ${anni} anni.`);
    }
}

export class Poligono extends Enumera {
    constructor(nomePoligono, numeroLati, lunghezzaLato) {
        super();
        this.nomePoligono = nomePoligono;
        this.numeroLati = numeroLati;
        this.lunghezzaLato = lunghezzaLato;
    }
    calcolaPerimetro() {
        const perimetro = this.numeroLati * this.lunghezzaLato;
        console.log(`Il perimetro del ${this.nomePoligono} è: ${perimetro}`);
    }
    descrivi() {
        console.log(`Questo è un ${this.nomePoligono} con ${this.numeroLati} lati.`);
    }
}
