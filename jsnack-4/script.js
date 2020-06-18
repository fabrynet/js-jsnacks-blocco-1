// Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari
var btn = document.getElementById('changeP');
console.log(btn);
btn.addEventListener('click', function() {

  var paragraph = document.getElementById('numero')
  console.log(paragraph);

  var min = 1;
  var max = 10;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(random);

  paragraph.classList.add("pari", "dispari");

  if (random % 2 == false) {
    paragraph.classList.remove("pari");

    document.getElementById('title').innerHTML = "Generato un numero pari";
  } else {
    paragraph.classList.remove("dispari");
    document.getElementById('title').innerHTML = "Generato un numero dispari";
  }


});
