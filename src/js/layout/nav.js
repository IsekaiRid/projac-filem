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
          </div>
        </nav>
      `;
    }
  }

  
  
  customElements.define("nav-bar", NavBar);