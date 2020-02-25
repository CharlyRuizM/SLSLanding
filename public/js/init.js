(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// funcion de carga de images

const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);

var carousel = document.querySelector('.carousel-custom');
var container = carousel.querySelector('.carousel-container-custom');
var prevBtn = carousel.querySelector('.carousel-prev-custom');
var nextBtn = carousel.querySelector('.carousel-next-custom');
var pagination = carousel.querySelector('.carousel-pagination-custom');
var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet-custom'));
var totalItems = container.querySelectorAll('.carousel-item-custom').length;
var percent = (100 / totalItems);
var currentIndex = 0;

function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

bullets[currentIndex].classList.add('active-bullet');
prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);

pagination.addEventListener('click', function(e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}, false);