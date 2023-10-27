const DrawerInitiator = {
  init({
    button, drawer, content, icon, overlay,
  }) {
    button.addEventListener('click', () => {
      this._toggleDrawer(drawer, icon, overlay);
    });

    content.addEventListener('click', () => {
      this._closeDrawer(drawer, icon, overlay);
    });
  },

  _toggleDrawer(drawer, icon, overlay) {
    drawer.classList.toggle('open');
    overlay.classList.toggle('overlay-open');
    if (drawer.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  },

  _closeDrawer(drawer, icon, overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('overlay-open');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  },
};

export default DrawerInitiator;
