export const reverse = (l) => {
    let lnuovo = []
    for(let el of l){
        lnuovo.unshift(el)
    }
    return lnuovo
};