export function is_anagram(arr) {
  let map = new Map()
  for(let word of arr){
    let sorted  = word.toLowerCase().split('').sort().join('')//prima li mette in minuscolo, poi divide,ordina e riunisce
    map.set(sorted,word)
  }

  return Array.from(map.values())
}  
