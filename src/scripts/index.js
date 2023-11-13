/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const loadStyles = (styles) => import(`../styles/${styles}.css`);

const loadView = async () => {
  const { default: App } = await import('./views/app');
  return App;
};

const loadUtils = async () => {
  const { default: swRegister } = await import('./utils/sw-register');
  return swRegister;
};

const loadInitialPage = async () => {
  const App = await loadView();
  const swRegister = await loadUtils();

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
    swRegister();
  });
};

loadStyles('main');
loadStyles('main-tablet');
loadStyles('main-phone');
loadStyles('detail');
loadStyles('detail-tablet');
loadStyles('detail-phone');
loadInitialPage();
