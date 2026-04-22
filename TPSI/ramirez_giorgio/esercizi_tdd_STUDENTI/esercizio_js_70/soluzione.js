class Calcolatrice{
    constructor(str){
        this.stringa = str
    }

    converti(){
        let opAtt = "+"
        let espr  = []
        this.stringa.split(" ").forEach(el => {
        if (!isNaN(el) && el !== " "){
            espr.push({
                valore: Number(el),
                operazione: opAtt
            });
        }
        else if (["+", "-", "*", "/"].includes(el)){
            opAtt = el}
        })
        return this.calcola(espr)
    }

    calcola(espr){
    const ris = espr.reduce((acc, current) => {
        if (current.operazione === '+') {
            return acc + current.valore;
        } else if (current.operazione === '-') {
         return acc - current.valore;
        } else if (current.operazione === '*') {
            return acc * current.valore;
        } else if (current.operazione === '/') {
            return acc / current.valore;
        }   
        return acc;
        }, 0)
        return ris
    }
}

let calc = new Calcolatrice("6 - 2 * 5 + 8 / 4")
console.log(calc.converti())
let calc2 = new Calcolatrice("11 * 3 + 5 - 5 / 11")
console.log(calc2.converti())
let calc3 = new Calcolatrice("29 + 2 - 7 / 3 / 2 + 1 * 2")
console.log(calc3.converti())