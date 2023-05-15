import html from './form.html';
import './form.scss';
import { sendEmail } from '../../sendEmail.js';

class FormComponent extends GHComponent {

    constructor() {
        super();
    }

    onServerRender() {

        super.render(html);

    }

    sendEmail(element) {
        event.preventDefault();
        sendEmail(element);
    }
}

if(!customElements.get('form-component')) {
    customElements.define('form-component', FormComponent);
}