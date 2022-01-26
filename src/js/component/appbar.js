class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container header">
                <a class="navbar-brand alphabet">
                Shonen Jam <i class="fas fa-dragon"></i>
                </a>
                
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse panel" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto ml-2 mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">ANIME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">MANGA</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">CHARACTERS</a>
                    </li>
                </ul>
                
                </div>
                
            </div>
        </nav>
        `;

    this.querySelector('.alphabet').addEventListener('click', () => {
      $('.detail-item').hide();
      $('main').show();
    });
  }
}

customElements.define('app-bar', AppBar);
