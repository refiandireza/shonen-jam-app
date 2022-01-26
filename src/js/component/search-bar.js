class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <div id="search-container" class="search-container d-none d-xl-block d-xxl-block">
          <input placeholder="Search anime" id="searchElement" type="search" autocomplete="off">
            <button id="searchButtonElement" type="submit"><i class="fas fa-search"></i></button>
        </div>
        `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
