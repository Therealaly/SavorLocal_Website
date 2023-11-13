import { createRestoItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantView {
  getTemplate() {
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
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, resto) => carry.concat(createRestoItemTemplate(resto)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.querySelector('.sl-content__cards').innerHTML = html;
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        <p style="font-weight:bold; color: #362706;">Sorry, there are no restaurants to show.</p>
        <p style="font-family: sans-serif; font-size: smaller;">Start saving your favorite restaurants by liking the available restaurants in the home page</p>
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
