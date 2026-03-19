export const unique_random_numbers = (n, m) => {
   let numeri = new Set()
   while (numeri.size < n) {
    const randomNum = Math.floor(Math.random() * m) + 1;
    numeri.add(randomNum);
  }
  return Array.from(numeri).sort((a, b) => b - a);
}
