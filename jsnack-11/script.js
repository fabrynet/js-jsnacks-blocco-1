// Crea un array vuoto. Chiedi per sei volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array

var btn = document.getElementById('btn');
btn.addEventListener('click',function(){

  var numbers = [];
  for (var i = 0;i < 6; i++) {
    num = parseInt(prompt("Inserisci il " + (i + 1) + " numero"));
    if ( isNaN(num) ) {
      alert("Attenzione inserisci un numero");
    } else {
      if (num%2) {
        numbers.push(num);
      }
      console.log(numbers);
    }
  }
  console.log(numbers);
  var result = document.getElementById('result');
  if (numbers.length > 0) {
    result.innerHTML = "Numeri dispari inseriti: " + numbers;
  } else {
    result.innerHTML = "Non hai inserito numeri dispari";
  }

});
