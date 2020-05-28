// L’utente inserisce due numeri in successione,
 // con due prompt. Il software stampa il maggiore.


// Chiedo all'utente il primo numero
var numeroUno = prompt("Dammi il primo numero");
console.log(numeroUno);
// Chiedo all'utente il secondo numero
var numeroDue = prompt("Dammi il secondo numero");
console.log(numeroDue);

// Stampo il numero maggiore

var messaggio

if (numeroUno > numeroDue) {
  messaggio = alert("il primo numero è più grande")

} else if (numeroUno < numeroDue) {
  messaggio = alert("il secondo numero è più grande")

} else {
  messaggio = alert("i numeri sono uguali")
}

console.log(messaggio);
