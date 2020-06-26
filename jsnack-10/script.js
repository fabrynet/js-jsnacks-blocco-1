// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
  var invitati = ["Fabrizio", "Fabio", "Giulia", "Mario", "mario"];
  var nome = prompt("Come ti chiami?");
  var idoneo = false;
  if (isNaN(nome)) {
    for (var i = 0; i < invitati.length; i++) {
      if (invitati[i] == nome) {
        idoneo = true;
      }
    }
    if (idoneo == true) {
      result.innerHTML = "Ciao " + nome + " sei invitato. Puoi partecipare alla festa del grande Gatsby!";
    }
    else {
      result.innerHTML = "Mi dispiace " + nome + ", non sei invitato alla festa del grande Gatsby.";
    }
  }
  else {
    alert("Attenzione inserisci correttamente il tuo nome.")
  }
});
