// Init Open Movie Database api class
class Omdbapi {
  constructor(){
      this.api_key = 'thewdb';
  }

  // Fetch movies
  async getMovie(movieTitle) {
      const moviesResponse = await fetch(`https://www.omdbapi.com/?S=${movieTitle}&apikey=${this.api_key}`);
      //json returns a promise that resolves with the result of parsing the moviesResponse
      const movies = await moviesResponse.json();
      return movies;
  }
}