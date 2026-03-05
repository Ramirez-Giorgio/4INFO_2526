export const prod_pow2 = (n) => {
  if (n.length === 0) return 0;
  return n.reduce((acc, curr) => acc * (curr ** 2), 1);
};