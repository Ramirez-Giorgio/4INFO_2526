const is_prime = (n)=>{
   return Array.from(Array(n).keys()).filter(e => e > 1).reduce((acc,e) => acc = acc && n & e != 0,true);
};

export const order = (l) => {
   return l.filter(e => is_prime(+e)).concat(l.filter(e => !is_prime(+e)));
};
