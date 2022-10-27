import './hello.scss';

class HelloComponent extends GHComponent {
    constructor() {
        super();
    }

    async render() {
        if(this.environment === 'server') {
            const name = this.getAttribute('data-name');
            this.innerHTML = /*html*/`
                <div class="hello">
                    Hello, ${name}!
                </div>
            `;
        }
    }
}

window.customElements.define('hello-component', HelloComponent);