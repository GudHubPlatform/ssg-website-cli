import html from './text.html';
import './text.scss';

class TextComponent extends GHComponent {

    constructor() {
        super();
    }

    onServerRender() {

        this.ghId = this.getAttribute('data-gh-id') || '';

        this.noText = this.hasAttribute('data-no-text');

        super.render(html);

    }

}

if (!customElements.get('text-component')) {
    customElements.define('text-component', TextComponent);
}