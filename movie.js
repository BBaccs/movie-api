const ui = new UI();
const omd = new Omdbapi();
const search = document.querySelector('#searchMovie');

search.addEventListener('keydown', function(){
    // Remove Current movies in UI
    ui.movieDisplay();
    // Clear any alerts in UI
    

    // Get the input value for the movie
    const movieTitle = search.value;

    // Display a list of movies if there is something in the input
    if (movieTitle !== '') {
        omd.getMovie(movieTitle)
        .then(function(movies){
            if (movies.Search === undefined) {
                // Clear any existing alerts
                ui. clearAlert();
                ui.showAlert('No match found, keep searching', 'alert alert-danger'); 
            } else {
                for (let i = 0; i < movies.Search.length; i++) {
                    const movie = movies.Search[i];
                    ui.displayMovies(movie);
                }
            }
        })        
        .catch(err => console.log(err));
    }
});