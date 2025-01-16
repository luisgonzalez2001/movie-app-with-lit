import { LitElement, html, css } from "lit";
import { Title } from "./g935-title";
import { unsafeCSS } from 'lit';

const optionsIcon = new URL('../../public/icons/options-icon.svg', import.meta.url).href; 
const searchIcon = new URL('../assets/icons/search-icon.svg', import.meta.url).href;

export class Header extends LitElement {
    static get properties() {
        return {

        }
    }

    static get styles() {
        return css`
            :host {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1;
            }

            header {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid var(--Gray);
                padding: 5px 25px;
                background: white;
                backdrop-filter: blur(40px);
            }

            label {
                display: inline-block;
                width: 30px;
                height: 30px;
                background: center / contain no-repeat url('../../public/icons/options-icon.svg');
                cursor: pointer;
            }

            .header-search-icon {
                width: 20px;
                height: 20px;
                background: center / contain no-repeat url('../../public/icons/search-icon.svg');
                cursor: pointer;
            }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <header id="header">
                <label for="btn-menu"></label>
                <g935-title>MOVIEAPP</g935-title>
                <button id="btnSearch-Active" class="header-search-icon"></button>
            </header>
        `;
    }
}
customElements.define('g935-header', Header);