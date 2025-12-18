function somma(n) {
    let c = 0
    for(let i = 0; i<= n; i++){
        c += i
    }
    return c;
}   

function main(){
    console.log("funzione che somma da 0 ad n inserito", somma(5));
    console.log("funzione che somma da 0 ad n inserito", somma("7"));
    console.log("funzione che somma da 0 ad n inserito", somma(7));     
}

main()