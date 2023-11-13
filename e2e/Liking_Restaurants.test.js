/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const assert = require('assert');

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Sorry, there are no restaurants to show.', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Sorry, there are no restaurants to show.', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.seeElement('#restaurant_name a');
  const firstRestaurant = locate('#restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.sl-content__cards-item');

  const likedRestaurantName = await I.grabTextFrom('#restaurant_name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Sorry, there are no restaurants to show.', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.seeElement('#restaurant_name a');
  const firstRestaurant = locate('#restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.sl-content__cards-item');

  const likedRestaurantName = await I.grabTextFrom('#restaurant_name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('#restaurant_name a');
  const Restaurant = locate('#restaurant_name a').first();
  I.click(Restaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Sorry, there are no restaurants to show.', '.restaurant-item__not__found');
});
