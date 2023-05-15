import html from './hero.html';
import './hero.scss';

class Hero extends GHComponent {
    
    constructor() {
        super();
    }

    onServerRender() {
        this.noText = this.hasAttribute('data-no-text');

        super.render(html);
    }

}

window.customElements.define('hero-component', Hero);