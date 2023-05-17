import html from './image-component.html';
import './image-component.scss';

class ImageComponent extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {
        this.src = this.getAttribute('src');
        this.dataSrc = this.getAttribute('data-src');
        this.dataUrl = this.getAttribute('data-url');
        this.alt = this.getAttribute('alt');
        this.title = this.getAttribute('title');
        this.lazyload = this.hasAttribute('lazyload');

        if(this.dataSrc && this.dataUrl) {
            await fetch(this.dataUrl + '?source=' + this.dataSrc + '&mode=ssr');
            this.src = this.dataUrl;
        }

        super.render(html);

    }

    async prepareSources() {

    }

}

if(!window.customElements.get('image-component')) {
    window.customElements.define('image-component', ImageComponent);
}