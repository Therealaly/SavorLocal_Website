import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="detail_restaurant_item">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" style="border-radius: 10px; width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div class="detail_restaurant_item" id="detailRestaurantText">
    <h2>${resto.name}</h2>
    <p>City: ${resto.city}</p>
    <p>Address: ${resto.address}</p>
    <p>Rating: ${resto.rating} / 5</p>
    <p>Description:</p>
    <p>${resto.description}</p>
  </div>
`;

const createRestoMenuFoodTemplate = (food) => `
  <div class="detail-restaurant_menus-item ">
    <p>${food.name}</p>
  </div>
`;

const createRestoMenuDrinkTemplate = (drink) => `
  <div class="detail-restaurant_menus-item ">
    <p>${drink.name}</p>
  </div>
`;

const createRestoReviewTemplate = (review) => `
  <div class="customer-review">
    <h4 id="reviewerName">${review.name}</h4>
    <p id="reviewDate">${review.date}</p>
    <p id="reviewComment">${review.review}</p>
  </div>
  <hr style="width: 100%; height: 2px; background-color:#362706">
`;

const createRestoItemTemplate = (resto) => `
  <div class="sl-content__cards-item">
    <div class="sl-content__cards-item-img ">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" style="border-radius: 10px 10px 0 0; width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="sl-content__cards-item-desc">
      <h3 id="restaurant_name" style="margin-bottom: 5px;"><a href="/#/detail/${resto.id}" style="color: #000000">${resto.name}</a></h3>
      <div class="sl-content__cards-item-desc-detail">
        <div class="sl-content__cards-item-desc-detail-point">
          <i class="fas fa-map-marker-alt"></i>
          <p>${resto.city}</p>
        </div>
        <div class="sl-content__cards-item-desc-detail-point">
          <i class="fas fa-star" style="color: #f9f21a;"></i>
          <p>${resto.rating} / 5</p>
        </div>
      </div>
      <div class="sl-content__cards-item-desc-rolling">
        <p>${resto.description}</p>
      </div>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoMenuFoodTemplate,
  createRestoMenuDrinkTemplate,
  createRestoReviewTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
