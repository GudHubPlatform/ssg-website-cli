import html from './team.html';
import './team.scss';

import teamScheme from './team-json-scheme.json';

import defaultData from './defaultData.json';

class TeamComponent extends GHComponent {

    constructor() {
        super();
        super.setDefaultData(defaultData);
    }

    async onServerRender() {

        this.ghId = this.getAttribute('data-gh-id') || null;

        const response = await gudhub.jsonConstructor({
            "type": "array",
            "id": 1,
            "childs": teamScheme,
            "property_name": "team",
            "app_id": constants.chapters.team.app_id,
            "filter": []
        });

        this.team = response.team;

        super.render(html);

    }

}

if (!customElements.get('team-component')) {
    customElements.define('team-component', TeamComponent);
}