// Quando l'utente scorre la pagina mostra il pulsante, tranne quando sei nella home
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  // Verifica se sei nella home
  var isHome = window.location.pathname === '/'; // Aggiusta il percorso in base alla tua struttura di routing

  // Ottieni il bottone per tornare all'inizio
  var myBtn = document.getElementById("myBtn");

  if (isHome) {
    // Nascondi il pulsante se sei nella home
    myBtn.style.display = "none";
  } else {
    // Mostra il pulsante quando l'utente scorre la pagina
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  }
}

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
