import html from './contact-us-block.html';
import './contact-us-block.scss';

import generalInfo from '../../../../general-info.json';

import jsonTemplate from './contact-us-block-data.json';

class ContactUsBlock extends GHComponent {

    constructor() {
        super();
        super.setDefaultData(jsonTemplate);
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        this.info = generalInfo;

        this.hrefPhone = this.info.phone.replace(/[ ()+-]/g, '');
        
        super.render(html);
    }
}
window.customElements.define('contact-us-block', ContactUsBlock);