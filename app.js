// Init Open Movie Database api class
class Omdbapi {
  constructor(){
      this.api_key = '7ee80466a9a73a706bb3da43d231787f';
  }

  // Fetch movies
  async getMovie(movieTitle) {
      const moviesResponse = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${this.api_key}&movie_id='${movieTitle}'`);
      console.log(moviesResponse)
      //json returns a promise that resolves with the result of parsing the moviesResponse
      const movies = await moviesResponse.json();
      return movies;
  }
}



//API Read Access Token (v4 auth)
/*eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWU4MDQ2NmE5YTczYTcwNmJiM2RhNDNkMjMxNzg3ZiIsInN1YiI6IjVkMjRiYTNiNmQ0Yzk3MDAxMDdiZjVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3th3HJY4erxGWXK223_3toUklzE3Nsl7ySDjifOGMcg*/