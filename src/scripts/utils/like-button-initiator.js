import FavoriteRestoSL from '../data/favorite-resto-sl';
import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestoSL.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoSL.putRestaurants(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoSL.deleteRestaurants(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
