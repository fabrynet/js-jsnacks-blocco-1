// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var btn = document.getElementById('btn');


btn.addEventListener('click',function(){

  var num = document.getElementById('num').value;
  var result = document.getElementById('result');
  var error = document.getElementById('error');

  result.className = "hidden";
  error.className = "hidden";

  console.log(num);
  if (num.length == 4) {
    var sum = 0;
    //le stringhe in JS può essere trattata come un array
    for (var i = 0; i < num.length; i++) {
      sum += parseInt(num[i]);
    }
    console.log(sum);
    result.innerHTML = "La somma delle cifre inserite è: " + sum;
    result.className = "show";
  } else {
    error.innerHTML = "Attenzione: inserisci un numero di 4 cifre";
    error.className = "show";
  }

});
