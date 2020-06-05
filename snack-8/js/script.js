// CONSEGNA
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
//  fino a quando ne avrà tanti quanti l’altro.

// Creo array 1
var arrayElementiUno =['1', '2', '3', '4', '5' ];
console.log("array 1 prima" + arrayElementiUno);


// Creo il secondo array
var arrayElementiDue =['1', '2'];

console.log("array 2 prima " + arrayElementiDue);

// Calcolo lunghezza mancate array
var lunghezzaMancante = arrayElementiUno.length - arrayElementiDue.length;

console.log(lunghezzaMancante);

// Verifico e aggiungo elementi nel caso il secondo array ne avesse di meno.
if (arrayElementiUno.length > arrayElementiDue.length) {
  for (var i = 0; i < lunghezzaMancante; i++) {
    // aggiungo un numero caso finchè non hanno la stessa lunghezza
    var numeroCaso = Math.floor((Math.random() * 10) + 1);
    console.log(numeroCaso);
    arrayElementiDue.push(numeroCaso)
  }
// / Verifico e aggiungo elementi nel caso il primo array ne avesse di meno.
} else if (arrayElementiUno.length < arrayElementiDue.length){
  for (var i = 0; i < lunghezzaMancante; i++) {
    // aggiungo un numero caso finchè non hanno la stessa lunghezza
    var numeroCaso = Math.floor((Math.random() * 10) + 1);
    console.log(numeroCaso);
    arrayElementiUno.push(numeroCaso)
  }

}


console.log("array 1 dopo " + arrayElementiUno);

console.log("array 2 dopo " + arrayElementiDue);


// fare la funzione per rimpire array e variabili per il lengh
