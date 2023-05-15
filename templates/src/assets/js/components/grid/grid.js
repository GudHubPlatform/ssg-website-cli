import html from './grid.html';
import './grid.scss';

class Grid extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        const ids = await super.findIds();

        const response = await gudhub.getDocument({ app_id: ids.appId, item_id: ids.itemId, element_id: window.constants.chapters.pages.json_field_id });

        const json = JSON.parse(response.data);

        this.items = json[this.ghId].items
        this.button_link = json[this.ghId].button_link
        this.button_text = json[this.ghId].button_text

        super.render(html);
    }

}

window.customElements.define('grid-component', Grid);