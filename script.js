'use strict';

const changeImg = document.querySelector('.nav--logo');
const closeSidebar = document.querySelector('.side--close');
const openSidebar = document.querySelector('.nav--options--btn');
const sidebar = document.querySelector('.side--nav');

sidebar.classList.add('hidden');
closeSidebar.addEventListener('click', function (e) {
  sidebar.classList.add('hidden');
});

openSidebar.addEventListener('click', function (e) {
  sidebar.classList.remove('hidden');
  openSidebar.classList.add('hidden');
});

const currImg = document.querySelector('body');

let i = 1;
changeImg.addEventListener('click', function (e) {
  currImg.style.backgroundImage = `url(media/img-${i}.jpg)`;
  i === 4 ? (i = 1) : i++;
});

// Slider :
const slider = document.querySelector('.img--slider');
const slides = document.querySelectorAll('.slides');
const dotsContainer = document.querySelector('.dots');
let currSlide = 0;
const maxSlides = slides.length - 1;

const goToSlide = function (s) {
  otherSlides();
  slides.forEach(function (slide, i) {
    slide.style.transform = `translateX(${(i - s) * 100}vw)`;
  });
};

const otherSlides = function () {
  slides.forEach(function (slide, i) {
    if (i === currSlide) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
};
// otherSlides();

const nextSlide = function () {
  if (currSlide === 3) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activeDot(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlides;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activeDot(currSlide);
};

window.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

const createDots = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `
      <button class="dots--dot" img-slide="${i}"></button>`
    );
  });
};

// Active Dot :
const activeDot = function (slide) {
  document.querySelectorAll('.dots--dot').forEach(function (dot, i) {
    dot.classList.remove('dots--dot--active');
    if (i === slide) {
      dot.classList.add('dots--dot--active');
    }
  });
};

const dotClick = function () {
  document.querySelectorAll('.dots--dot').forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      currSlide = i;
      goToSlide(i);
      activeDot(i);
    });
  });
};

const init = function () {
  goToSlide(0);
  createDots();
  activeDot(0);
};
init();
dotClick();

window.addEventListener('contextmenu',function(e){
  e.preventDefault();
})