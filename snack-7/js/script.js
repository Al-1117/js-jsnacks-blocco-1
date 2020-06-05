// CONSEGNA SNACK
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
 // Gatsby vuole generare una falsa lista di invitati.
//
// Creo array dei Nomi
var arrayNomi = ['Mario', 'Andrea', 'Marco', 'Michela', 'Anna',];

console.log(arrayNomi);
// Creo array dei cognomi
var arrayCognomi = ['Bianchi', 'Rossi', 'Gialli', 'Verdi', 'Neri',];
console.log(arrayCognomi);
//
var componentilistaFalsa = 5;

//

// Genero la lista
for (var i = 0; i < componentilistaFalsa; i++) {
  var listaFalsa = [];
  // console.log(a);
  // Creo il nome casuale
  var indiceCasualeNomi = Math.floor(Math.random() * arrayNomi.length);
  var nomeCasuale = arrayNomi[indiceCasualeNomi];
  // console.log("questo è il nome casuale " + nomeCasuale);


  var indiceCasualeCognomi = Math.floor(Math.random() * arrayCognomi.length);
  var cognomeCasuale = arrayCognomi[indiceCasualeCognomi];
  // console.log("questo è il cognome casuale " + cognomeCasuale);

  var nomeFalso = nomeCasuale + ' ' + cognomeCasuale;

  listaFalsa.push(nomeFalso);

  console.log(listaFalsa);

}
