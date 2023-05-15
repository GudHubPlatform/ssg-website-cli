import html from './call-to-action.html';
import './call-to-action.scss';

class CallToAction extends GHComponent {
    constructor() {
        super();
    }

    onServerRender() {

        this.ghId = this.getAttribute('data-gh-id') || null;

        super.render(html);
    }

    showAlert() {
        alert('Action!');
    }
}

window.customElements.define('call-to-action', CallToAction);