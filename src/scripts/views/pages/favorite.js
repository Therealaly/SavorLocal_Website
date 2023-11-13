/* eslint-disable no-new */
import FavoriteRestoSL from '../../data/favorite-resto-sl';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantView from './liked-restaurants/favorite-restaurant-view';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestoSL });
  },
};

export default Favorite;
