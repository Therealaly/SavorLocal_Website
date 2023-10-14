import { restaurants } from '../public/data/DATA.json';

const renderRestaurants = (restaurants) => {
  const restaurantContainer = document.querySelector('.sl-content__cards');

  restaurants.forEach((restaurant) => {
    const { name, city, rating, description, pictureId } = restaurant;

    const restaurantCard = document.createElement('div');
    restaurantCard.classList.add('sl-content__cards-item');

    restaurantCard.innerHTML = `
      <div class="sl-content__cards-item-img">
        <img src="${pictureId}" alt="${name}" style="border-radius: 10px 10px 0 0; width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="sl-content__cards-item-desc">
        <h3 style="margin-bottom: 5px;">${name}</h3>
        <div class="sl-content__cards-item-desc-detail">
          <div class="sl-content__cards-item-desc-detail-point">
            <i class="fas fa-map-marker-alt"></i>
            <p>${city}</p>
          </div>
          <div class="sl-content__cards-item-desc-detail-point">
            <i class="fas fa-star" style="color: #f9f21a;"></i>
            <p>${rating} / 5</p>
          </div>
        </div>
        <div class="sl-content__cards-item-desc-rolling">
          <p>${description}</p>
        </div>
      </div>
    `;

    restaurantContainer.appendChild(restaurantCard);
  });
};

export default renderRestaurants;
