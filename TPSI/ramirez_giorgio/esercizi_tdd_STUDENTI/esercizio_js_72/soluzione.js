export class Studente {
  constructor(nome, classe) {
    this.nome = nome;
    this.classe = classe;}
}

export class Docente {
  constructor(nome,classe){
    this.nome = nome
    this.classe = classe
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  if ((obj1 instanceof Studente && obj2 instanceof Studente) || (obj1 instanceof Docente && obj2 instanceof Docente)){
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
      return true}
   else{return false} 
  }
  else
  {return false} 
}
