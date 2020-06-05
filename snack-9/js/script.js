// CONSEGNA
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri,
//  stampiamo nell’id rosso i numeri dispari e
//  in verde i numeri pari.

// CREO VARIABILI ELEMENTI HTML
var pari = document.getElementById('pari');
var dispari = document.getElementById('dispari');

// CREO ARRAY NUMERI che poi verrà popolato
var arrayNumeri = [];

// Ciclo FOR per popolare i numeri nell'array
for (var i = 1; i <= 25; i++) {

  // Appendo all'arrayNumeri, i numeri generati dal ciclo
  arrayNumeri.push(i)

  console.log(arrayNumeri);


  // VERIFICO SE I NUMERI SONO PARI O DISPARI
  // Se il numero è pari:
  if (i % 2 == 0) {
  pari.innerHTML+= '<li>' + i + '</li>';
  }

// Altrimenti se dispari
  else if (i % 2 != 0) {
  dispari.innerHTML+= '<li>' + i + '</li>';
  console.log(i);
  }


}
