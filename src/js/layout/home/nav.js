class NavBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
  <a class="navbar-brand fs-3 fw-bold" href="../index.html">
  barudak<span>nolep</span>
  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
      <a class="nav-link active fs-5 fw-bolder" aria-current="page" href="profil.html">About</a>
      </li>
      </ul>
    </div>
  </div>
</nav>
      `;
    }
  }

  
  
  customElements.define("nav-bar", NavBar);