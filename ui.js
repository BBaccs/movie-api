class UI {
  constructor() {
      this.display = document.getElementById('movieDisplay');
  }
  displayMovies(movie) {
      this.display.innerHTML += `
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
        <img class="mb-3 mr-3" style="max-width:300px; max-height:300px" src="${movie.Poster}">
          <br>
          <a href="${movie.Poster}" target="_blank" class="btn btn-primary btn-block mb-4">View Poster</a>
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
      this.display.innerHTML = '';
  }

  clearAlert() {
    //Check for alerts
    const currentAlert = document.querySelector('.alert-danger');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showAlert(message, className) {
   // Create div
   const div = document.createElement('div');
   // Add class
   div.className = className;
   // Append text into div
   div.appendChild(document.createTextNode(message));
   // Get parent so we can insert div
   const container = document.querySelector('.card-body');
   // Get sibling so we can insert the div before the sibling
   const searchMovie = document.querySelector('#searchMovie');
   // Insert the div into the container, before anything else is dynamically generated
   container.insertBefore(div, searchMovie);
   // Remove alert after 3 seconds
   setTimeout(() => {
     this.clearAlert();
   }, 3000);
  }
}