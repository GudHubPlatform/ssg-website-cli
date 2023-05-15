import html from './image-component.html';
import './image-component.scss';

class ImageComponent extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this.title = this.getAttribute('title');
        this.lazyload = this.hasAttribute('lazyload');

        if(this.src) {
            await fetch(this.src + '?mode=ssr');
        }

        super.render(html);

    }

    async prepareSources() {

    }

}

if(!window.customElements.get('image-component')) {
    window.customElements.define('image-component', ImageComponent);
}