// // L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var string1 = prompt("Inserisci la prima parola");
var string2 = prompt("Inserisci la seconda parola");
var length1 = 0;
var lenght2 = 0;
var maggiore;
var result = document.getElementById('result');

if (isNaN(string1) && isNaN(string2)) {
  if (string1.length > string2.length) {
    result.innerHTML = string2 + " " + string1;
  } else {
    result.innerHTML = string1 + " " + string2;
  }
} else {
  alert("Attenzione inserisci solo caratteri");
}
