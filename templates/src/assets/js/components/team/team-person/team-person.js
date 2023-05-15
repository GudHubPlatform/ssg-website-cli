import html from './team-person.html';
import './team-person.scss';
import json from './team-person-properties.json';

class TeamPerson extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {

        if(this.member) {
            super.render(html);
            return;
        }

        this.ghId = this.getAttribute('data-gh-id') || null;

        const response = await gudhub.jsonConstructor({
            "type": "array",
            "id": 1,
            "childs": json,
            "property_name": "team",
            "app_id": constants.chapters.team.app_id,
            "filter": []
        });

        const { team } = response;

        this.members = team;

        super.render(html);

    }

}

if (!customElements.get('team-person')) {
    customElements.define('team-person', TeamPerson);
}