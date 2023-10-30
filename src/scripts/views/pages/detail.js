import RestaurantSources from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createRestoDetailTemplate, createRestoMenuFoodTemplate,
  createRestoReviewTemplate, createRestoMenuDrinkTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="hero" class="sl-jumbotron">
    <div class="sl-jumbotron__img-overlay"></div>
    <img class="sl-jumbotron__img" src="./images/heros/hero-image_4.jpg" alt="SavorLocal promotional header image" />
    <div class="sl-jumbotron__desc">
      <h1 class="sl-jumbotron__desc-title">
        Restaurant Detail
      </h1>
      <p style="font-family: 'Open Sans', sans-serif;">
        Explore this restaurant's menus. Save to Favorite and visit it someday!
      </p>
    </div>
  </div>
  <div class="sl-content">
    <div class="detail-restaurant"></div>
    <div class="detail-restaurant_menus">
      <h3>Foods</h3>
      <div class="detail-restaurant_menus-foods"></div>
      <h3>Drinks</h3>
      <div class="detail-restaurant_menus-drinks"></div>
    </div>
    <h3>Review</h3>
    <div class="detail-restaurant_reviews"></div>
  </div>
  <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSources.detailRestaurant(url.id);
    const foods = await RestaurantSources.RestaurantFoods(url.id);
    const drinks = await RestaurantSources.RestaurantDrinks(url.id);
    const reviews = await RestaurantSources.RestaurantReviews(url.id);

    const restaurantContainer = document.querySelector('.detail-restaurant');
    const foodsContainer = document.querySelector('.detail-restaurant_menus-foods');
    const drinksContainer = document.querySelector('.detail-restaurant_menus-drinks');
    const reviewsContainer = document.querySelector('.detail-restaurant_reviews');

    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    foods.forEach((food) => {
      foodsContainer.innerHTML += createRestoMenuFoodTemplate(food);
    });

    drinks.forEach((drink) => {
      drinksContainer.innerHTML += createRestoMenuDrinkTemplate(drink);
    });

    reviews.forEach((review) => {
      reviewsContainer.innerHTML += createRestoReviewTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
