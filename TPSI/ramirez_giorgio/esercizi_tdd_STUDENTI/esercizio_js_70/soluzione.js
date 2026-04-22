class Calcolatrice{
    constructor(str){
        this.stringa = str
    }

    converti(){
        let currentOp = "+"
        let espressione  = []
        this.stringa.split(" ").forEach(el => {
        if (!isNaN(el) && el !== " "){
            espressione.push({
                val: Number(el),
                op: currentOp
            });
        }
        else if (["+", "-", "*", "/"].includes(el)){
            currentOp = el}
        })
        return this.calcola(espressione)
    }

    calcola(espressione){
    const ris = espressione.reduce((acc, current) => {
        if (current.op === '+') {
            return acc + current.val;
        } else if (current.op === '-') {
         return acc - current.val;
        } else if (current.op === '*') {
            return acc * current.val;
        } else if (current.op === '/') {
            return acc / current.val;
        }   
        return acc;
        }, 0)
        return ris
    }
}

calc = new Calcolatrice("6 - 2 * 5 + 8 / 4")
console.log(calc.converti())
calc = new Calcolatrice("11 * 3 + 5 - 5 / 11")
console.log(calc.converti())
calc = new Calcolatrice("29 + 2 - 7 / 3 / 2 + 1 * 2")
console.log(calc.converti())