import './search-item.js';

class SearchList extends HTMLElement {
    set animes(animes) {
        this._animes = animes;
        this.render();
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerTHML += `<h4>${message}</h4>`;
    }

    this.render() {
        this.innerHTML = '';
        this._anime.forEach( anime => {
            const animeItemElement = document.createElement('search-item');
            animeItemElement.anime = anime
            this.appendChild(animeItemElement);
        })
    }
}

customElements.define('search-list', SearchList);
