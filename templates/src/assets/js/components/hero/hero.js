import html from './hero.html';
import './hero.scss';

class Hero extends GHComponent {
    
    constructor() {
        super();
    }

    onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        this.noText = this.hasAttribute('data-no-text');

        super.render(html);
    }

}

window.customElements.define('hero-component', Hero);