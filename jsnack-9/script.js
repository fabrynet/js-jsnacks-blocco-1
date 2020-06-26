// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.
var result = document.getElementById('result');
var num = 0;

var numeroVolte = parseInt(prompt("Quanti numeri vuoi sommare?"));

// for (var i = 0; i < 5; i++) {
//   num += parseInt(prompt("Inserisci il " + (i + 1) + " numero"));
// }
var i = 0;
var sum = 0;
while (i < numeroVolte) {
  num = parseInt(prompt("Inserisci il " + (i + 1) + " numero"));
  if ( isNaN(num) ) {
    alert("Attenzione inserisci un numero");
  } else {
    sum += num;
    console.log(sum);
    i++;
  }
}
console.log(sum);
result.innerHTML = "La somma è: " + sum;
