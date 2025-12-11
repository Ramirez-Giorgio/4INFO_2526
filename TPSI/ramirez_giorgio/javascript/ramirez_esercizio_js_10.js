let utente = {
  "nome": "Mario",
  "cognome": "Rossi",
  "anni": 20
};

let chiavi = Object.keys(utente);

for (let i = 0; i < chiavi.length; i++) {
  const chiave = chiavi[i];
  console.log('la chiave ${chiave} ha valore ${utente[chiave]}');
}
