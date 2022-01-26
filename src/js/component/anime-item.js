import DataSource from '../data/data-source.js';

class AnimeItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  switchPage() {
    $('main').hide();
    $('.detail-item').show();
  }

  render() {
    this.innerHTML = `
            <div class="col data-wrapper">
              <div class="card shadow mb-3" style="max-width: 540px;" data-aos="fade-up" data-aos-anchor=".data-wrapper">
                <div class="row  g-0">
                  <div class="col-md-4 card-img-cont">
                    <img src="${this._item.image_url}" loading="lazy" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <a class="card-title" data-id="${this._item.mal_id}">${this._item.title}</a>
                      <p class="card-text">${this._item.synopsis}</p>
                      <p class="rating">Rating: <span class="value">${this._item.score} <i class="fas fa-star"></i></span></p>
                      <p class="card-text"><small class="text-muted">${this._item.type}, <strong>${this._item.members.toLocaleString()}</strong> Members</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        `;

    let delay = 0;
    $('[data-aos]').each(function () {
      if ($(this).is(":visible") == true) {
        delay = delay + 200;
        $(this).attr('data-aos-delay', delay);
      }
    });

    // Datasource
    const animeInfo = async (id) => {
      try {
        const result = await DataSource.detailAnime(id);
        renderResult(result);
      } catch (message) {
        console.log(message);
      }
    };

    const renderResult = (results) => {
      this.switchPage();

      // empty all form data
      $('#detail-title').html('');
      $('#detail-score').html('');
      $('#detail-rank').html('');
      $('#detail-popularity').html('');
      $('#detail-members').html('');
      $('#detail-synopsis').html('');

      $('.eng-title').html('');
      $('.synonims').html('');
      $('.j-title').html('');
      $('.type').html('');
      $('.episodes').html('');
      $('.premiered').html('');
      $('.broadcast').html('');
      $('.producers').html('');
      $('.licensors').html('');
      $('.studios').html('');
      $('.source').html('');
      $('.genres').html('');
      $('.themes').html('');
      $('.demographic').html('');
      $('.duration').html('');
      $('.side-rating').html('');
      $('.favorites').html('');
      $('.content-char').html('');
      $('.content-staff').html('');
      $('.reviews-list').html('');

      // add fetch data
      $('#detail-image-score').attr('src', results[0].image_url);
      $('#detail-title').append(`<h3>${results[0].title}</h3>`);
      $('#detail-score').append(`${results[0].score}`);
      $('#detail-rank').append(`${results[0].rank}`);
      $('#detail-popularity').append(`${results[0].popularity}`);
      $('#detail-members').append(`${results[0].members.toLocaleString()}`);
      $('#detail-synopsis').append(`<p>${results[0].synopsis}</p>`);

      $('.eng-title').append(results[0].title_english);
      $('.synonims').append(results[0].title_synonyms);
      $('.j-title').append(results[0].title_japanese);
      $('.type').append(results[0].type);
      $('.episodes').append(`${results[0].episodes !== null ? results[0].episodes : '0'}`);
      $('.premiered').append(`${results[0].premiered !== null ? results[0].premiered : '-'}`);
      $('.broadcast').append(`${results[0].broadcast !== null ? results[0].broadcast : '-'}`);
      $('.producers').append(`${results[0].broadcast !== null ? results[0].broadcast : '-'}`);
      $('.licensors').append(`${results[0].licensors[0] ? results[0].licensors[0].name : '-'}`);
      $('.studios').append(`${results[0].producers[0] ? results[0].producers[0].name : '-'}`);
      $('.source').append(`${results[0].source ? results[0].source.name : '-'}`);
      $('.genres').append(`${results[0].genres[0] ? results[0].genres[0].name : '-'}`);
      $('.themes').append(`${results[0].themes[0] ? results[0].themes[0].name : '-'}`);
      $('.demographic').append(results[0].demographics[0]);
      $('.duration').append(results[0].duration);
      $('.side-rating').append(results[0].rating);
      $('.favorites').append(results[0].favorites);

      results[1].characters.splice(0, 4).forEach((item) => {
        const {
          name, image_url, role, voice_actors,
        } = item;
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6', 'col-12', 'char');
        itemElement.innerHTML = `
          <div class="img-wrapper">
              <img src="${image_url}" id="image-char" alt="">
            </div>
            <div class="text">
              <p>Name: <span>${name}</span></p>
              <p> Role: <span >${role}</span></p>
              <p>Voice Actor: <span>${voice_actors[0].name}</span></p>
            </div>
        `;
        $('.content-char').append(itemElement);
      });

      results[1].staff.splice(0, 4).forEach((item) => {
        const { name, image_url, positions } = item;
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6', 'col-12', 'staff');
        itemElement.innerHTML = `
          <div class="img-wrapper">
              <img src="${image_url}" id="image-char" alt="">
            </div>
            <div class="text">
              <p>Name: <span>${name}</span></p>
              <p>Position: <span>${positions}</span></p>
            </div>
        `;
        $('.content-staff').append(itemElement);
      });

      results[2].reviews.splice(0, 4).forEach((item) => {
        const { helpful_count, reviewer, content } = item;
        const itemElement = document.createElement('div');
        itemElement.classList.add('reviews-item', 'py-3');
        itemElement.innerHTML = `
          <div class="item-header">
            <img src="${reviewer.image_url}" class="img-thumbnail" alt="">
            <div class="header-text ps-3 py-2">
              <span><b>${reviewer.username}</b></span>
              <span>Overall Rating: ${reviewer.scores.overall}</span>
              <span>${helpful_count} people found this review helpful</span>
            </div>
          </div>
          <div class="item pt-2" id="review-comment">
            <p>${content}</p>
          </div>
          <a class="more-button"></a>
        `;
        $('.reviews-list').append(itemElement);
        const moreBtn = itemElement.querySelectorAll('.more-button');

        moreBtn.forEach((e) => {
          e.addEventListener('click', () => {
            e.parentNode.classList.toggle('active');
          });
        });
      });

      $(window).scrollTop(0);
    };

    // card onclick
    const cardAnime = this.querySelector('.card-title');
    cardAnime.addEventListener('click', function () {
      const idAnime = this.getAttribute('data-id');
      animeInfo(idAnime);
    });
  }
}

customElements.define('anime-item', AnimeItem);
