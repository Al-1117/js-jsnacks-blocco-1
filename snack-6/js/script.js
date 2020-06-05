// // Fai inserire un numero, che chiameremo N, all’utente.
// // Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
//  // Ogni volta che ne crei uno, stampalo a schermo.
//
// // FACCIO INSERIRE NUMERO ALL'UTENTE
var n = parseInt(prompt("Inseririsci un numero"));
//
// // Creo il genaratore di array con un ciclo for
for (var i = 0; i < n; i++) {

  var arrayGenerati = [];
  // Genero l'array singolo con un'altro ciclo for
  for (var k = 0; k < 10; k++) {
    // Creo il numero casuale che andrà a popolare l'array
    var numeroCasuale = Math.floor(Math.random(10) * (100) + 1);
    arrayGenerati.push(numeroCasuale);
  }

  console.log(arrayGenerati);

}
