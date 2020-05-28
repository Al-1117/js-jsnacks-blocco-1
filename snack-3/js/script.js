// In un array sono contenuti i nomi degli invitati alla
// festa del grande Gatsby, chiedi all’utente il suo nome
//  e comunicagli se può partecipare o no alla festa.


// Lista invitati alla festa

var invitati = ["Marco", "Paolo", "Simone", "Michela"];


// chiedo nome utente

var utente = prompt("Dimmi il tuo nome");

// CICLO FOR

var messaggio;

var verifica = false;

// Controllo se fa parte degli invitati utilizzando un ciclo FOR

for (var i = 0; i < invitati.length; i++) {

  if (utente == invitati[i]) {
    verifica = true;

  }
}


// Se fa parte degli invitati
if (verifica) {
  messaggio = alert("Fai parte della festa");

// Se non fa parte degli invitati
} else {
  messaggio = alert("Non Fai parte della festa");
}


// // CICLO WHILE//
//
//
// // Controllo se fa parte degli invitati utilizzando un ciclo WHILE
//
// var messaggio;
//
// var i = 0;
//
// while (i < invitati.length && messaggio != "Fai parte della festa") {
//
//   console.log(invitati[i]);
//   if (utente == invitati[i]) {
//
//     messaggio = "Fai parte della festa";
//
//   }
//
//
//   i++
// }
//
//
//
// console.log(messaggio);
