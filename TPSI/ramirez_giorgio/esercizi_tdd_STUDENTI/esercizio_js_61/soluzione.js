export function count_occurence(text) {
   let atext = text.split(' ')
   let occorrenze = new Map()
   atext.forEach(parola =>{ 
      if(occorrenze.has(parola))
         occorrenze.set(parola,occorrenze.get(parola)+1)
      else
         occorrenze.set(parola,1)  
   })
   return occorrenze;
}

