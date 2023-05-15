import html from './header.html';
import './header.scss';

class Header extends GHComponent {
    constructor() {
        super();
    }

    onServerRender() {
        this.menu = [
            { name: 'Home', link: '/' },
            { name: 'Services', link: '/services/' },
            { name: 'About Us', link: '/about-us/' },
            { name: 'Contact Us', link: '/contact-us/' }
        ];

        super.render(html);
    }

    onClientReady() {
        const activePath = window.location.pathname;
        const menu = this.querySelector('.menu').querySelectorAll('a');

        menu.forEach((item) => {
            if (item.getAttribute('href') === activePath) {
                item.parentElement.classList.add('active');
            }
        });

    }

}

window.customElements.define('header-component', Header);