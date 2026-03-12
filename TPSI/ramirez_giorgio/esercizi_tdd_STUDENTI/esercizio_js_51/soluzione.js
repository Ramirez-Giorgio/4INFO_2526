export const dec_to_bin = (n) => {
   return n.split('').reverse().reduce((acc,e,i) => acc + ((2 **i )*e),0)
};