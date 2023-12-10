class FooterBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <footer id="footer">
            Barudak Nolep &#169;2023 ridhwansulaiman
        </footer>
        `;
    }
}

customElements.define("footer-bar", FooterBar);