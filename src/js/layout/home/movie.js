const image = "https://image.tmdb.org/t/p/w500";
class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card text-white bg-dark">
    <img src="${image + this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}">
    <div class="card-body">
      <div class="card-info">
        <h5 class="card-title my-auto">${this._movie.title}</h5>
        <span>
          <i class="bi bi-star-fill"></i>
          ${this._movie.vote_average}
        </span> 
      </div>
        <p class="my-auto">${this._movie.release_date}</p>
    </div>
  </div>
    `;

  }
}

customElements.define("movie-item", MovieItem);