document.addEventListener("DOMContentLoaded", function () {
  // Funzione per gestire il clic sugli elementi h3 delle FAQ
  function toggleFAQContent() {
    // Otteniamo il genitore dell'elemento h3 cliccato (la casella delle FAQ)
    const faqBox = this.parentElement;

    // Aggiungiamo o rimuoviamo la classe 'active' per mostrare o nascondere il contenuto
    faqBox.classList.toggle('active');
  }

  // Otteniamo tutti gli elementi h3 delle FAQ
  const faqTitles = document.querySelectorAll('.contact .riga .faq .box h3');

  // Aggiungiamo l'evento di clic a ciascun titolo delle FAQ
  faqTitles.forEach(faqTitle => {
    faqTitle.addEventListener('click', toggleFAQContent);
  });
});



function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    number: document.getElementById("number").value,
    richiamare: document.getElementById("richiamare").value,
    message: document.getElementById("msg").value
  };

  emailjs.send("service_9f61txk", "template_sx8rlqg", params).then(
    function (res) {
      alert("Email inviata correttamente");
      document.getElementById("fullName").value = '';
      document.getElementById("email_id").value = '';
      document.getElementById("number").value = '';
      document.getElementById("richiamare").value = '';
      document.getElementById("msg").value = '';
    },
    function (error) {
      console.log("Errore nell'invio dell'email:", error);
      alert("Si è verificato un errore nell'invio dell'email. Controlla la console per i dettagli.");
    }
  );
}

// codice javascript carosello progetti

var swiper = new swiper('.swiper-container', {
  loop: true, // Abilita il loop del carosello
  slidesPerView: 'auto', // Imposta il numero di slide visibili in base alla larghezza del contenitore
  spaceBetween: 20, // Spazio tra le slide
  centeredSlides: true, // Centra le slide
  
  // Modalità di layout responsive
  breakpoints: {
    // Quando la larghezza del dispositivo è inferiore a 678px
    678: {
      slidesPerView: 1, // Visualizza una sola slide
      spaceBetween: 0, // Nessuno spazio tra le slide
    },
    // Quando la larghezza del dispositivo è inferiore a 576px
    576: {
      slidesPerView: 1, // Visualizza una sola slide
      spaceBetween: 0, // Nessuno spazio tra le slide
    },
  }
});
