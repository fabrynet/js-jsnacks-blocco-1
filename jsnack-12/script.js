// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){

  var base = document.getElementById('base').value;
  var exp = document.getElementById('exp').value;
  var list = document.getElementById('list');
  var cube = 0;

  list.innerHTML = "";

  for (var i = 1; i <= base; i++) {
    cube = Math.pow(i,exp); //equivalente a i**3
    list.innerHTML += "<li>" + i + " elevato a " + exp + " = " + cube + "</li>";
  }

});
