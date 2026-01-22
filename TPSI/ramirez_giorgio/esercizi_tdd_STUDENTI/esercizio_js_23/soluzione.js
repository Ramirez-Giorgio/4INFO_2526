export const abbreviazione = (str) => {
    let arr = str.split(' ');
    return arr[0].slice(0,1).toUpperCase() + arr[0].slice(1) + ' ' + arr[1].slice(0,1).toUpperCase() + '.';
}

