// Init Open Movie Database api class
class Tmd {
  constructor(){
      this.api_key = '7ee80466a9a73a706bb3da43d231787f';
      this.base_url = 'https://api.themoviedb.org/3';
      this.url_sort_by_popularity = 'https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=7ee80466a9a73a706bb3da43d231787f';
      this.working_url = 'https://api.themoviedb.org/3/movie/550?api_key=7ee80466a9a73a706bb3da43d231787f';

  }

  // Fetch movies
  async getMovie(movieTitle) {
      const moviesResponse = await fetch(`${this.url_sort_by_popularity}`, {
          mode: 'cors'
      })
      //json returns a promise that resolves with the result of parsing the moviesResponse
      const movies = await moviesResponse.json();
      console.log(moviesResponse)
      console.log(movies.title)
      return movies;
  }
}

//API Read Access Token (v4 auth)
/*eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWU4MDQ2NmE5YTczYTcwNmJiM2RhNDNkMjMxNzg3ZiIsInN1YiI6IjVkMjRiYTNiNmQ0Yzk3MDAxMDdiZjVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3th3HJY4erxGWXK223_3toUklzE3Nsl7ySDjifOGMcg*/

