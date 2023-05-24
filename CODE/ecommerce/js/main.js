const pre = document.querySelector('#prev');
const next = document.querySelector('#next');
const slider = document.querySelector('.slider');
const slide = Array.from(slider.querySelectorAll('.slide'));

let currentSlide = 0;

slide.forEach((slide) => {
    slide.addEventListener('click', () => {
        slider.dataset.state = slider.dataset.state === 'full' ? 'slides' : 'full';
    });
});

function setSlide(index) {
    slide.forEach((slide) => delete slide.dataset.current);
    currentSlide = index;
    slide[index].dataset.current = true;
  
    slide.forEach((slide, i) => {
      slide.classList.remove('-main'); // Rimuove la classe -main da tutte le slide
      if (i === index) {
        slide.classList.add('-main'); // Aggiunge la classe -main alla slide principale
      } else if (i === index - 1 || i === index + 1) {
        slide.classList.add('-side'); // Aggiunge la classe -side alle slide laterali
      }

    });
  }
  

setSlide(currentSlide);

pre.addEventListener('click', () => {
    setSlide(currentSlide - 1 < 0 ? slide.length - 1 : currentSlide - 1);
});

next.addEventListener('click', () => {
    setSlide(currentSlide + 1 >= slide.length ? 0 : currentSlide + 1);
});