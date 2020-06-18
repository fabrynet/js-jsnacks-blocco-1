// // Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
// Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.
// N.B. trascura pure i controlli!
var btn = document.getElementById('calcola');

console.log(btn);

btn.addEventListener('click', function() {

  var number1 = parseFloat(document.getElementById('number1').value);
  var number2 = parseFloat(document.getElementById('number2').value);
  var operazione = document.getElementById('operazione').value;
  var result = document.getElementById('result');
  var risultato;

  console.log("Primo numero: " + number1);
  console.log("Secondo numero: " + number2);
  console.log("Operazione: " + operazione);

  if (number1) {
    if (number2) {
      if (operazione) {
        if (operazione == "1") {
          risultato = number1 + number2;
          result.innerHTML = "Il risultato dell'addizione è: " + risultato;
        } else if (operazione == "2") {
          risultato = number1 - number2;
          result.innerHTML = "Il risultato della sottrazione è: " + risultato;
        }
        else if (operazione == "3") {
          risultato = number1 * number2;
          result.innerHTML = "Il risultato della moltiplicazione è: " + risultato;
        }
        else if (operazione == "4") {
          if (number2 == "0") {
            result.innerHTML = "Il secondo dividendo non può essere 0";
          } else {
            risultato = parseFloat((number1 / number2).toFixed(2));
            result.innerHTML = "Il risultato della divisione è: " + risultato;
          }
        }
        console.log(risultato);
      }
      else {
        result.innerHTML = "Seleziona un'operazione.";
      }
    }
    else {
      result.innerHTML = "Inserisci il secondo operando.";
    }
  }
  else {
    result.innerHTML = "Inserisci il primo operando.";
  }

});
