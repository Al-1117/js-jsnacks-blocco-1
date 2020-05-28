// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// CHIEDO LE PAROLE ALL utente

var parolaUno = prompt('Inserisci la prima parola');

var parolaDue = prompt('Inserisci la seconda parola');

console.log(parolaUno);
console.log(parolaDue);

var messaggio;


// STAMPO LE PAROLE INSERITE DALLUTENTE

if (parolaUno.length > parolaDue.length) {
  // Se la prima parola è più lunga
  console.log( parolaUno);
  console.log(parolaDue);
  messaggio = "La prima parola è più lunga"
  document.getElementById('uno').innerHTML = parolaUno
  document.getElementById('due').innerHTML = parolaDue

} else if (parolaUno.length < parolaDue.length){
  // Se la seconda parola è più lunga
  console.log(parolaDue);
  console.log( parolaUno);
  messaggio = "La seconda parola è più lunga"
  document.getElementById('uno').innerHTML = parolaDue
  document.getElementById('due').innerHTML = parolaUno
}
else {
  messaggio = "Le parole hanno la stessa lunghezza"
}

// Comunico all'utente la parola più lunga

alert(messaggio);
