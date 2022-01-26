import './anime-item.js';

class AnimeList extends HTMLElement {
  set items(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.innerHTML += `
        <div class="row d-flex align-items-stretch row-cols-1 row-cols-md-2 g-4 pb-2">
        </div>
        `;
    this._items.splice(0, 12).forEach((item) => {
      const animeItemElement = document.createElement('anime-item');
      animeItemElement.item = item;
      this.querySelector('.row').appendChild(animeItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('anime-list', AnimeList);
