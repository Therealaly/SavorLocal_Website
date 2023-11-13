/* eslint-disable no-undef */
import FavoriteRestoSL from '../src/scripts/data/favorite-resto-sl';
import * as TestFactories from './helpers/testFactories';

describe('Menyukai Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('Menampilkan tombol menyukai ketika restorant belum disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('Tidak menampilkan tombol unlike ketika restoran belum disukai sebelumnya', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('Harus bisa menyukai sebuah restoan', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan resto berhasil disukai
    const restaurant = await FavoriteRestoSL.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestoSL.deleteRestaurants(1);
  });

  it('Harus tidak menambahkan restoran kembali ketika sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoSL.putRestaurants({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteRestoSL.getAllRestaurants()).toEqual([{ id: 1 }]);

    await FavoriteRestoSL.deleteRestaurants(1);
  });

  it('Harus tidak menambahkan restoran ketika tidak memiliki id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoSL.getAllRestaurants()).toEqual([]);
  });
});
