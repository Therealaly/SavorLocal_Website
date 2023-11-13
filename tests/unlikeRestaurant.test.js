/* eslint-disable no-undef */
import FavoriteRestoSL from '../src/scripts/data/favorite-resto-sl';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoSL.putRestaurants({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoSL.deleteRestaurants(1);
  });

  it('harus menampilkan widget unlike ketika restoran sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('harus tidak menampilkan widget like ketika restoran sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant  "]')).toBeFalsy();
  });

  it('Harus bisa menghapus restoran yang disukai dari daftar', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoSL.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoSL.deleteRestaurants(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoSL.getAllRestaurants()).toEqual([]);
  });
});
