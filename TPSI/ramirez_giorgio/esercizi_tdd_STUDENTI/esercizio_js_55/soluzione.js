export const no_copies = (array) => {
   return array.filter((a,b) => array.indexOf(a) === b)
}
