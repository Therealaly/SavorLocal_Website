import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/main-tablet.css';
import '../styles/main-phone.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  icon: document.querySelector('#hamburger-icon'),
  overlay: document.getElementById('overlay'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
