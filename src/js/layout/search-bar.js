class SearchBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
    get value() {
      return this.querySelector("#search-input").value;
    }
  
    render() {
    this.innerHTML = `
      <div class="container-fluid background">
        <div class="container text-center">
            <div class="row mt-5 justify-content-center">
                <div class="col-md-8">
                    <p class="h1 fw-bold">Welcome bro</p>
                    <p class="h4 fw-lighter">cari filem Favorite kamu</p>
                    <div class="mt-4 d-flex">
                        <input class="form-control me-1" type="search" placeholder="Search filem" id="search-input">
                        <button class="btn btn-danger" type="submit" id="search-button">Search</button>
                    </div>
                    <div class="error"></div>
                </div>
            </div>
        </div>
      </div>
    `;
  
      this.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
  }
  
  customElements.define("search-bar", SearchBar);