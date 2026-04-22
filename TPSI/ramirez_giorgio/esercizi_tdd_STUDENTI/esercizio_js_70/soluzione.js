export class Calcolatrice {
    somma(a, b) { return a + b; }
    sottrazione(a, b) { return a - b; }
    moltiplicazione(a, b) { return a * b; }
    divisione(a, b) { 
        if (b === 0) throw new Error("Divisione per zero");
        return a / b; 
    }
}

const calc = new Calcolatrice();

const espressioni = [
    "6 - 2^* 5 + 8 / 4",
    "11^* 3 + 5 - 5 / 11",
    "29 + 2 + (-7) / 2 + 1^* 2" 
];

console.log("RISULTATI CALCOLATRICE (Senza precedenze):");
espressioni.forEach(espr => {
        const res = calc.eseguiEspressione(espr);
        console.log(`${espr} = ${res}`);
});