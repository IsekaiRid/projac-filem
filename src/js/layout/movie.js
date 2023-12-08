const image = "https://image.tmdb.org/t/p/w500";
class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
  <img src="${image + this._movie.poster_path}" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${this._movie.title}</b></h4> 
    <p class="my-auto">${this._movie.release_date}</p>
    <p>  <i class="bi bi-star-fill"></i>
    ${this._movie.vote_average}</p>
  </div>
</div>
    `;

  }
}

customElements.define("movie-item", MovieItem);