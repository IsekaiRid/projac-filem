import "../layout/nav.js";
import "../layout/search-bar.js";
import "../layout/movie-list.js";
import "../layout/footer.js";
import DataSource from "../data/data-filem.js";

const main = () => {
    const navbarElement = document.querySelector("nav");
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const footerElement = document.querySelector("footer");
  
    const onButtonSearchClicked = () => {
      DataSource.searchMovie(searchElement.value)
        .then(renderResult)
        .catch(displayMovie)
    }
  
    const displayMovie = () => {
      DataSource.getMovie()
        .then(renderResult)
        .catch(fallbackResult)
    }
  
    const renderResult = results => {
      movieListElement.movies = results;
    }
  
    const fallbackResult = message => {
      movieListElement.renderError(message);
    }
  
    searchElement.clickEvent = onButtonSearchClicked;
    displayMovie();



    searchElement.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    onButtonSearchClicked();
  }
});
  }
  
  export default main;