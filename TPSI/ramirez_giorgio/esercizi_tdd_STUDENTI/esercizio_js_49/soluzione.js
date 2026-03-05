export const map_arr = (l, n) => {
    if (n === 0) return l;
    return l.map(num => {
        return num % n === 0 ? 0 : num;
  });
};