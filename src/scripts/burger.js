const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const overlay = document.getElementById('overlay');

hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open'); // add open class
  overlay.classList.toggle('overlay-open'); // Toggle the overlay class
  event.stopPropagation();

  if (drawerElement.classList.contains('open')) { // if nav drawer open
    hamburgerIcon.classList.remove('fa-bars'); // remove "burger" icon
    hamburgerIcon.classList.add('fa-times'); // add "x" icon
  } else { // if nav drawer closed
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
  }
});

mainElement.addEventListener('click', event => { // action when clicking content in main civ
  drawerElement.classList.remove('open');
  overlay.classList.remove('overlay-open'); // Remove the overlay class
  event.stopPropagation();

  hamburgerIcon.classList.remove('fa-times'); // remove "x" icon
  hamburgerIcon.classList.add('fa-bars'); // add "burger" icon
});
