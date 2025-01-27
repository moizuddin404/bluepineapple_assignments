class HeroName extends HTMLElement {

    connectedCallback() {
        const hero = this.getAttribute('hero') || "Moizuddin Shaikh";
        this.textContent = `${hero}`;
    }

    static get observedAttributes() {
        return ['hero'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;

        if (property === 'hero') {
            this.textContent = `${newValue}`
        }
    }
}


customElements.define('hero-name', HeroName);