export const reverse = (l) => {
    let numeri = [1,2,3]
    numeri.sort((a, b) => {
        return b - a; 
    });
    return numeri
};