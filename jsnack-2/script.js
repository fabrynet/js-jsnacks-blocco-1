// L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.
var btn = document.getElementById('concatenaBtn');
btn.addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  if (!isNaN(name) || !isNaN(surname)) {
    alert('Inserire solo valori caratteri');
  }
  else {
    var nameSurname = name + " " + surname;
    console.log("Il tuo nome completo è: " + nameSurname );
  }

});
