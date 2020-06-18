// Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.
var btn = document.getElementById('changeP');
console.log(btn);
btn.addEventListener('click', function() {

  var paragraph = document.getElementById('paragraph')
  console.log(paragraph);
  var number = parseInt(prompt('Inserisci un numero'));

  console.log(number);

  if (number > 0) {
    paragraph.className = "green";
  } else if (number < 0) {
    paragraph.className = "red";
  } else {
    paragraph.className = "blue";
  }

});
