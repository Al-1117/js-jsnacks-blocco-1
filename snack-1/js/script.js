// L’utente inserisce due numeri in successione,
 // con due prompt. Il software stampa il maggiore.

// ELEMENTI HTML





// Chiedo all'utente il primo numero
var numeroUno = prompt("Dammi il primo numero");
console.log(numeroUno);
document.getElementById('primo_numero').innerHTML = numeroUno;
// Chiedo all'utente il secondo numero
var numeroDue = prompt("Dammi il secondo numero");
console.log(numeroDue);
document.getElementById('secondo_numero').innerHTML = numeroDue;
// Stampo il numero maggiore

var messaggio = document.getElementById('messaggio');

if (numeroUno > numeroDue) {
  messaggio.innerHTML = "il primo numero è più grande"

} else if (numeroUno < numeroDue) {
  messaggio.innerHTML = ("il secondo numero è più grande")

} else {
  messaggio.innerHTML = ("i numeri sono uguali")
}

console.log(messaggio);
