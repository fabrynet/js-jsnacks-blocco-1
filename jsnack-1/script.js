// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var num1 = parseInt(prompt("Inserisci il primo numero:"));
var num2 = parseInt(prompt("Inserisci il secondo numero:"));
console.log(num1);
console.log(num2);
if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) {
    console.log("Il numero più grande è: " + num1);
  }
  else if (num1 == num2) {
    console.log("I numeri sono uguali");
  }
  else {
    console.log("Il numero più grande è: " + num2);
  }
}
else {
  console.log("Attenzione: inserisci solo numeri.");
}
