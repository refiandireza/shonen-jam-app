import DataSource from "../data/data-source.js";
import './anime-list.js';

class GenreList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    const genres = [
      {
        id: 1,
        name: 'Action',
      },
      {
        id: 2,
        name: 'Adventure',
      },
      {
        id: 4,
        name: 'Comedy',
      },
      {
        id: 7,
        name: 'Mystery',
      },
      {
        id: 8,
        name: 'Drama',
      },
      {
        id: 10,
        name: 'Fantasy',
      },
      {
        id: 14,
        name: 'Horror',
      },
      {
        id: 17,
        name: 'Martial Arts',
      },
      {
        id: 22,
        name: 'Romance',
      },
      {
        id: 23,
        name: 'School',
      },
      {
        id: 24,
        name: 'Sci Fi',
      },
      {
        id: 31,
        name: 'Super Power',
      },
      {
        id: 36,
        name: 'Slice Of Life',
      },
      {
        id: 37,
        name: 'Supernatural',
      },
      {
        id: 38,
        name: 'Military',
      },

    ];

    const listAnimeElement = document.querySelector('anime-list');
    
    this.innerHTML = `
            <div class="list-item d-flex flex-row flex-wrap">
            
            </div>
        `;
    
    genres.forEach((item) => {
      const genreItemElement = document.createElement('div');
      genreItemElement.classList.add('item');
      genreItemElement.id = item.id;

      const genreItemElementText = document.createElement('p');
      genreItemElementText.innerText = item.name;
      genreItemElement.appendChild(genreItemElementText);
      this.querySelector('.list-item').appendChild(genreItemElement);
      
      genreItemElement.addEventListener('click', function() {
        const idGenre = this.getAttribute('id');
        genreFilter(idGenre);
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(".active").removeClass("active");
          $(this).addClass('active');
        }
      });
    });

    const genreFilter = async (genre_id) => {
      try {
        const result = await DataSource.genreFilter(genre_id);
        renderResult(result);
      } catch (message) {
        console.log(message);
      } 
    }

    const renderResult = (result) => {
      listAnimeElement.items = result;
    }
  }
}

customElements.define('genre-list', GenreList);
