import html from './team.html';
import './team.scss';

class TeamComponent extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {

        this.ghId = this.getAttribute('data-gh-id') || null;

        super.render(html);

    }

}

if (!customElements.get('team-component')) {
    customElements.define('team-component', TeamComponent);
}