const menu = document.querySelector('#menu');
const navbar = document.querySelector('nav');
const topNav = document.querySelector('#top-nav');
const bottomNav = document.querySelector('#bottom-nav');
const exitButton = document.querySelector('#exit-button');

function openMenu() {
  document.body.style.position = 'fixed';
  document.body.style.overflow = 'hidden';
  navbar.classList.add('open-menu');
  topNav.classList.add('top-nav');
  bottomNav.classList.add('bottom-nav');
}

function resetMenu() {
  document.body.style.position = 'relative';
  document.body.style.overflow = 'scroll';
  navbar.classList.remove('open-menu');
  topNav.classList.remove('top-nav');
  bottomNav.classList.remove('bottom-nav');
}

function resizeWindow() {
  if (window.innerWidth > 768) {
    resetMenu();
  }
}

exitButton.addEventListener('click', resetMenu);
window.addEventListener('resize', resizeWindow);
menu.addEventListener('click', openMenu);
