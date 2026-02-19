export const reverse = (l) => {
    let lnuovo = []
    for(let el of l){
        lnuovo.unshift(el)
    }
    let somma = l.reduce((acc, current) => acc + current, 0); // acc = acc + current
    lnuovo.unshift(somma)
    return lnuovo
}