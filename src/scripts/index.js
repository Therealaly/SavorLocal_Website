import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/main-tablet.css';
import '../styles/main-phone.css';
import './burger.js';

import renderRestaurant from './renderRestaurant.js';
import data from '../public/data/DATA.json'; // Import the default export

const { restaurants } = data; // Extract the 'restaurants' property from the imported data

renderRestaurant(restaurants);

console.log('Hello Coders! :)');

