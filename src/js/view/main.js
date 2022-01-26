import '../component/anime-list.js';
import '../component/search-bar.js';
import '../component/airing-list.js';
import '../component/popular-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const animelistElement = document.querySelector('anime-list');
  const topAiringElement = document.querySelector('airing-list');
  const popularAnimeElement = document.querySelector('popular-list');

  const onButtonSearchClicked = () => {
    searchResult(searchElement.value);
  };

  const searchResult = async (keyword) => {
    try {
      const result = await DataSource.searchAnime(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const topAiring = async () => {
    try {
      const result = await DataSource.topAiringAnime();
      renderTopAnime(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const popularAnime = async () => {
    try {
      const result = await DataSource.popularAnime();
      renderPopularAnime(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  // render main page
  const renderResult = (results) => {
    animelistElement.items = results;
  };

  const renderTopAnime = (results) => {
    topAiringElement.items = results;
  };

  const renderPopularAnime = (results) => {
    popularAnimeElement.items = results;
  };

  const fallbackResult = (message) => {
    animelistElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  searchResult('naruto');
  topAiring();
  popularAnime();
};

export default main;
