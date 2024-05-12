var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelector('.fb-share-button').addEventListener('click', function(event) {
  event.preventDefault();
});

document.querySelector('.whatsapp-button').addEventListener('click', function(event) {
});

document.querySelector('.telegram-button').addEventListener('click', function(event) {
});

document.querySelector('.swiper-button-prev').addEventListener('click', function(event) {
});

document.querySelector('.swiper-button-next').addEventListener('click', function(event) {
});

// Carica il widget Twitter
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
      t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

// Codice per creare il bottone di condivisione Twitter
twttr.ready(function() {
  twttr.widgets.createShareButton(
      "https://www.pixelpro.cloud/portfolio/portfolio.html",
      document.getElementById("twitter-widget-container"),
      {
          size: "large",
          text: "Una pagina che ti potrebbe interessare",
          hashtags: "pixelpro,webdesign",
          via: "pixelprocloud"
      }
  );
});
