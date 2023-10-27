import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  hello ${resto.name}
`;

const createRestoItemTemplate = (resto) => `
  <div class="sl-content__cards-item">
    <div class="sl-content__cards-item-img">
      <img src="${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}" alt="${resto.name}" style="border-radius: 10px 10px 0 0; width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="sl-content__cards-item-desc">
      <h3 style="margin-bottom: 5px;">${resto.name}</h3>
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

export { createRestoItemTemplate, createRestoDetailTemplate };
