import './ranking-unit.js';

class AiringList extends HTMLElement {
  set items(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.innerHTML += `
          <ul class="d-flex list flex-column">
            
          </ul>
        `;
    const viewNumber = this._items.splice(0, 5);
    viewNumber.forEach((item) => {
      const animeItemElement = document.createElement('ranking-unit');
      animeItemElement.item = item;
      this.querySelector('.list').appendChild(animeItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('airing-list', AiringList);
