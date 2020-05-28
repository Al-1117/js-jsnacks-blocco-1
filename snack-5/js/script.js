// Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.
//   Esegui questo programma in due versioni, con il for e con il while.

// CHIEDO ALL'UTENTE PER 5 VOLTE DI INSERIRE UN NUMERO

// CICLO FOR
//
for (var i = 0; i < 5; i++) {

  var numeroUtente = parseInt(prompt('Dammi un numero'));
  var numeri = numeri + numeroUtente;
}



// CICLO WHILE

var numeri = 0;
console.log(numeri);

var  i = 0;

while (i < 5) {
  var numeroUtente = parseInt(prompt('Dammi un numero'));
  console.log(numeroUtente);

  var numeri = numeri + numeroUtente;


  i++

}

// STAMPO LA SOMMA DI TUTTI NUMERI INSERITI


console.log(numeri);
// Comunico all'utente la somma dei numeri che ha inserito
alert("La somma dei numeri che hai inserito è " + numeri)
