const burger = document.querySelector('.header__toggle');
const nav = document.querySelector('.main-nav');

burger.classList.remove('header__toggle--nojs');
nav.classList.remove('main-nav--nojs');

burger.addEventListener('click', function(){
  burger.classList.toggle('header__toggle--close');
  nav.classList.toggle('main-nav--open');
})
