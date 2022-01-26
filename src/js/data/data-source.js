class DataSource {
  static searchAnime(keyword) {
    return fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=10`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static genreFilter(genreId) {
    return fetch(`https://api.jikan.moe/v3/genre/anime/${genreId}/1`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.anime) {
          return Promise.resolve(responseJson.anime);
        }
        return Promise.reject(`${genreId} is not found`);
      });
  }

  static topAiringAnime() {
    return fetch('https://api.jikan.moe/v3/top/anime/1/airing')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.top) {
          return Promise.resolve(responseJson.top);
        }
        return Promise.reject('Anime is not found');
      });
  }

  static popularAnime() {
    return fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.top) {
          return Promise.resolve(responseJson.top);
        }
        return Promise.reject('Anime is not found');
      });
  }

  static detailAnime(id) {
    return Promise.all([
      fetch(`https://api.jikan.moe/v3/anime/${id}`).then((response) => response.json()),
      fetch(`https://api.jikan.moe/v3/anime/${id}/characters_staff`).then((response) => response.json()),
      fetch(`https://api.jikan.moe/v3/anime/${id}/reviews`).then((response) => response.json())
        .then((res) => {
          if (res) {
            return Promise.resolve(res);
          }
          return Promise.reject(`${id} is not found`);
        }),
    ]);
  }
}

export default DataSource;
