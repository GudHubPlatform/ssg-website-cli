import html from './team-person.html';
import './team-person.scss';

import jsonTemplate from './team-person-data.json';

class TeamPerson extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {
        this.firstName = this.getAttribute('data-first-name');
        this.lastName = this.getAttribute('data-last-name');

        if(this.firstName && this.lastName) {
            super.render(html);
        } else {
            this.firstName = jsonTemplate.first_name;
            this.lastName = jsonTemplate.last_name;
            super.render(html);
        }
    }
}

if (!customElements.get('team-person')) {
    customElements.define('team-person', TeamPerson);
}