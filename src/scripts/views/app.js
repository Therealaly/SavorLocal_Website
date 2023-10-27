import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content, icon, overlay }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._icon = icon;
    this._overlay = overlay;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      icon: this._icon,
      overlay: this._overlay,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    this._closeDrawer();

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  _closeDrawer() {
    DrawerInitiator._closeDrawer(this._drawer, this._icon, this._overlay);
  }
}

export default App;
