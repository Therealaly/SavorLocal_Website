import RestaurantSources from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div id="hero" class="sl-jumbotron">
      <div class="sl-jumbotron__img-overlay"></div>
      <picture class="sl-jumbotron__picture">
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img class="sl-jumbotron__img" src='./images/hero-image_2-large.jpg' 
            alt="dSavorLocal promotional header image">
      </picture>
      <div class="sl-jumbotron__desc">
        <h1 class="sl-jumbotron__desc-title">
          Discover, Savor, Repeat
        </h1>
        <p style="font-family: 'Open Sans', sans-serif;">
          Explore and savor the best of local cuisine. 
          Uncover delectable restaurants, farm-to-table gems, 
          and foodie delights.
        </p>
      </div>
    </div>
    <div class="sl-content">
      <div class="sl-content__title">
        <h2 style="padding-block: 1.5rem;">
          Discover Local Treasure
        </h2>
      </div>
      <div class="sl-content__cards" id="restaurantList">
        <!-- Skeleton UI -->
        <div class="skeleton-container" id="skeletonContainer">
          <div class="skeleton-card"></div>
          <div class="skeleton-card"></div>
          <div class="skeleton-card"></div>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    // Display skeleton UI while data is being fetched
    const skeletonContainer = document.getElementById('skeletonContainer');
    skeletonContainer.innerHTML = `
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    `;

    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSources.listRestaurants();
    const restaurantsContainer = document.getElementById('restaurantList');
    restaurantsContainer.innerHTML = ''; // Clear skeleton UI

    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
