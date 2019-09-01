var mainNav = document.querySelector('.site-navigation');
var logo = document.querySelector ('.site-logo');
var navOpener = document.querySelector('.site-header__burger');
var navCloser = document.querySelector('.site-header__closer');

mainNav.classList.add('site-navigation__js-active');

navOpener.classList.remove ('site-header__burger--js-active');

logo.classList.add ('site-logo--js-active');

navCloser.classList.remove ('site-header__closer--js-active');

navOpener.addEventListener('click',function() {
  mainNav.classList.remove('site-navigation__js-active');

  navOpener.classList.add('site-header__burger--js-active');

  logo.classList.remove ('site-logo--js-active');
});

navCloser.addEventListener('click',function() {
  mainNav.classList.add('site-navigation__js-active');

  navOpener.classList.remove('site-header__burger--js-active');

  logo.classList.add ('site-logo--js-active');
});
