import html from './text.html';
import './text.scss';
import defaultData from './defaultData.json';

class TextComponent extends GHComponent {

    constructor() {
        super();
        super.setDefaultData(defaultData);
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