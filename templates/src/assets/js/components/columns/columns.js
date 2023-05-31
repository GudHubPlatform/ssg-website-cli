import html from './columns.html';
import './columns.scss';
import defaultData from './defaultData.json';

class ColumnsComponent extends GHComponent {

    constructor() {
        super();
        super.setDefaultData(defaultData);
    }

    async onServerRender() {

        this.ghId = this.getAttribute('data-gh-id') || null;

        this.json = await super.getGhData(this.ghId);

        this.columns = this.json.columns;

        super.render(html);

    }

}

if (!customElements.get('columns-component')) {
    customElements.define('columns-component', ColumnsComponent);
}