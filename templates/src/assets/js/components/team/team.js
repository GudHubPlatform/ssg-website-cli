import html from './team.html';
import './team.scss';

import defaultData from './defaultData.json';

class TeamComponent extends GHComponent {

    constructor() {
        super();
        super.setDefaultData(defaultData);
    }

    async onServerRender() {

        this.ghId = this.getAttribute('data-gh-id') || null;

        super.render(html);

    }

}

if (!customElements.get('team-component')) {
    customElements.define('team-component', TeamComponent);
}