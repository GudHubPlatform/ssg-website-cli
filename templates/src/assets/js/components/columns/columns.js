import html from './columns.html';
import './columns.scss';

class ColumnsComponent extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {

        this.ghId = this.getAttribute('data-gh-id') || null;
        const ids = await super.findIds();

        const response = await gudhub.getDocument({ app_id: ids.appId, item_id: ids.itemId, element_id: window.constants.chapters.pages.json_field_id });

        const json = JSON.parse(response.data);

        this.columns = json[this.ghId].columns;

        super.render(html);

    }

}

if (!customElements.get('columns-component')) {
    customElements.define('columns-component', ColumnsComponent);
}