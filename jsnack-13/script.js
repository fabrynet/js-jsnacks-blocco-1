// Stampa le potenze di 2 fino a 1000.

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){

  var list = document.getElementById('list');
  // var pow = 0;
  // var i = 0;

  //prima soluzione
  for (var i = 1; i < 1000; i=i*2) {
    list.innerHTML += "<li>" + i + "</li>";
  }

  // seconda soluzione
  var i = 0;
  while (2**i < 1000) {
    list.innerHTML += "<li>" + 2**i + "</li>";
    i++;
  }

  //terza soluzione
  var result = 1;
  var exp = 1;
  while (result < 1000) {
    list.innerHTML += "<li>" + result + "</li>";
    result = 2**exp;
    exp++;
  }

  // quarta soluzione
  var result = 1;
  var exp = 1;
  do {
    list.innerHTML += "<li>" + result + "</li>";
    result = 2**exp;
    exp++;
  } while (result < 1000);
});
