import gambar from '../../img/deku trp2.png'

class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="hero">
            <div class="container d-flex flex-column">
            <div class="row">
                <div class="col-lg-6 col-md-12 py-md-5 py-3 ps-md-5 px-4  test">
                <h1>Welcome to Shonen Jam Anime Apps</h1>
                <p class="py-3">Track your anime: anytime, <b >anywhere</b>. New anime announcements, what's trending now, friend's scores and stats, milestones for your favorite series, and more.</p>
                <button type="button" class="btn p-2 me-3 btn-hero">
                    Read More <i class="fas fa-chevron-circle-right"></i>
                </button>
                <button type="button" class="btn btn-primary flex-lg-row gplay-btn p-2 ">
                    <i class="fab fa-google-play"></i> Google Play
                </button>
                </div>
                <div class="col-lg-6 col-md-12 img-holder">
                <img src="${gambar}" loading="lazy" class= "hero-img mx-auto d-block img-fluid" alt="">
                </div>
            </div>
            </div>
        </section>
        `;
  }
}

customElements.define('jumbotron-header', JumboTron);
