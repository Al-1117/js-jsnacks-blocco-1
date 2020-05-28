// L’utente inserisce due numeri in successione,
 // con due prompt. Il software stampa il maggiore.

// ELEMENTI HTML





// Chiedo all'utente il primo numero
var numeroUno = parseInt(prompt("Dammi il primo numero"));
console.log(numeroUno);
document.getElementById('primo_numero').innerHTML = numeroUno;
// Chiedo all'utente il secondo numero
var numeroDue = parseInt(prompt("Dammi il secondo numero"));
console.log(numeroDue);
document.getElementById('secondo_numero').innerHTML = numeroDue;

// Controllo se i numeri sono validi

while ( isNaN(numeroUno) || isNaN(numeroDue) ) {
  alert("Numeri inseriti non validi. per favore controllare");
  var numeroUno = parseInt(prompt("Dammi il primo numero"));
  var numeroDue = parseInt(prompt("Dammi il secondo numero"));

}




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
