export const same = (arr1, arr2) => {
   return arr1.lenght === arr2.lenght && arr1.reduce((a,e,i) => a && (e === arr2[i]),true);
}
