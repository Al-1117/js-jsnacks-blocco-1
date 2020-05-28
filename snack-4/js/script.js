// Chiedi un numero di 4 cifre all’utente e
// calcola la somma di tutte le cifre che compongono il numero.


// Chiedo il numero all'utente

var numero = parseInt(prompt("Dammi un numero di 4 cifre"));
console.log(numero);

// Controllo che il numero inserito sia valido

// while (numero != 4) {
//   numero = parseInt(prompt("Numero non valido. Dammi un numero di 4 cifre"));
//   console.log(numero);
// }


// Converto il numero in Stringhe
var nuovoArray = numero.toString();
console.log(nuovoArray);

// Divido il numero in 4 parti

var numeroDiviso = nuovoArray.split("")
console.log(numeroDiviso);

// Sommo i numeri diviso utilizzando il ciclo

var somma = 0;

for (var i = 0; i < numeroDiviso.length; i++) {

  somma = somma + parseInt(numeroDiviso[i]);
}

// Somma totale dei numeri inseriti

console.log(somma);
