import FavoriteRestoSL from '../../data/favorite-resto-sl';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div id="hero" class="sl-jumbotron">
      <div class="sl-jumbotron__img-overlay"></div>
      <img class="sl-jumbotron__img" src="./images/heros/hero-image_2.jpg" alt="SavorLocal promotional header image" />
      <div class="sl-jumbotron__desc">
        <h1 class="sl-jumbotron__desc-title">
          Favorite Restaurant
        </h1>
        <p style="font-family: 'Open Sans', sans-serif;">
          Find your saved restaurants here!
        </p>
      </div>
    </div>
    <div class="sl-content">
      <div class="sl-content__title">
        <h2 style="padding-block: 1.5rem;">
          My Precious Restaurants
        </h2>
      </div>
      <div class="sl-content__cards"></div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestoSL.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.sl-content__cards');

    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
