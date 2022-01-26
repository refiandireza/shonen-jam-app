import 'bootstrap';
import 'regenerator-runtime';
import './css/style.css';
import './css/fontawesome.css';

import './js/component/appbar.js';
import './js/component/ranking-unit.js';
import './js/component/jumbotron.js';
import './js/component/genre-handler';
import './js/component/author.js';
import main from './js/view/main.js';
import AOS from 'aos';

import 'aos/dist/aos.css';

AOS.init();

document.addEventListener('DOMContentLoaded', main);
