import html from './footer.html';
import './footer.scss';

class FooterComponent extends GHComponent {
    
    constructor() {
        super();
    }

    onServerRender() {

        super.render(html);

    }

}

if(!customElements.get('footer-component')) {
    customElements.define('footer-component', FooterComponent);
}