// L'utente inserisce due numeri in successione con due prompt, il programa stampa il maggiore

var num1 = prompt("Inserisci il primo numero");
var num2 = prompt("Inserisci il secondo numero");
var maggiore;
var result = document.getElementById('result');

if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) {
    result.innerHTML = ("Il numero maggiore è: " + num1);
  } else if (num2 > num1) {
    result.innerHTML = ("Il numero maggiore è: " + num2);
  } else {
    result.innerHTML = ("I numeri sono uguali");
  }
} else {
  alert("Attenzione inserisci solo numeri");
}
