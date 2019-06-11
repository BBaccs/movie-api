class UI {
  constructor() {
      this.profile = document.getElementById('movieDisplay');
  }
  displayMovies(movie) {
      this.profile.innerHTML += `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
        <img class="mb-3 mr-3" style="max-width:300px; max-height:300px" src="${movie.Poster}">
          <br>
          <a href="${movie.Poster}" target="_blank" class="btn btn-primary btn-block mb-4">View Movie</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Movie Title: ${movie.Title}</span>
          <span class="badge badge-secondary">Movie Type: ${movie.Type}</span>
          <span class="badge badge-success">Movie Year: ${movie.Year}</span>
          <span class="badge badge-info">Movie imdID Number: ${movie.imdbID}</span>
        </div>
      </div>
    </div>
      `;
  }
  
  movieDisplay() {
      this.profile.innerHTML = '';
  }

  showAlert() {
  }
}