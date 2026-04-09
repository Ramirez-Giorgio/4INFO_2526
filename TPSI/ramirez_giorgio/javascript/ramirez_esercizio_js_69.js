class Quadrato{
    constructor(l){
        this.lato = l
    }
    set lato(val){this._lato = val}
    get area(){ return this._lato **2 }
    get perimtro(){ return this._lato * 4 }
}
function main(){
    q = new Quadrato(3);
    alert('l area è ', q.area)
    console.log('il perimetro è ',q.perimtro)
}

main()