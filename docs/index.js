var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideSadhows: true,
  },
  loop: true,
})

// Quando l'utente scorre la pagina, mostra il pulsante
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando l'utente clicca sul pulsante, torna all'inizio della pagina
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Aggiungi l'evento di invio del modulo
document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault(); // Interrompi l'invio del modulo predefinito

  // Ottieni i valori dei campi del modulo
  var nome = document.getElementsByName('name')[0].value;
  var email = document.getElementsByName('email')[0].value;
  var telefono = document.getElementsByName('number')[0].value;
  var giornoOra = document.getElementsByName('richiamare')[0].value;
  var messaggio = document.getElementsByName('msg')[0].value;

  // Prepara i dati per l'invio
  var dati = {
      service_id: 'service_9f61txk',
      template_id: 'template_sx8rlqg',
      user_id: 'user_hH0EIrxAH2qrDt5xj', // Chiave pubblica API
      template_params: {
          nome: nome,
          email: email,
          telefono: telefono,
          giornoOra: giornoOra,
          messaggio: messaggio
      }
  };

  // Invia l'email tramite EmailJS
  email.send('default_service', 'template_9hbs0me', dati)
      .then(function (response) {
          console.log('Email inviata con successo!', response);
          // Aggiungi qui la logica per mostrare un messaggio di conferma o reindirizzare l'utente a una pagina di successo
      }, function (error) {
          console.log('Errore nell\'invio dell\'email:', error);
          // Aggiungi qui la logica per mostrare un messaggio di errore all'utente
      });
});
