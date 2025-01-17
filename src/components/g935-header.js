import { LitElement, html, css } from "lit";
import { Title } from "./g935-title";
import { SearchForm } from "./g935-searchForm";
import { HeaderMenu } from "./g935-header-menu";

const optionsIcon = new URL('../../public/icons/options-icon.svg', import.meta.url).href; 
const searchIcon = new URL('../assets/icons/search-icon.svg', import.meta.url).href;

export class Header extends LitElement {
    static get properties() {
        return {
            searchFormActive: {type: Boolean},
            classes: {},
        }
    }

    static get styles() {
        return css`
            *{
                box-sizing: border-box;
            }

            :host {
                display: block;
                position: fixed;
                width: 100vw;
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
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(40px);
            }

            label {
                display: inline-block;
                width: 30px;
                height: 30px;
                background: center / contain no-repeat url('../../public/icons/options-icon.svg');
                cursor: pointer;
            }

            button {
                width: 20px;
                height: 20px;
                border: none;
                background: center / contain no-repeat url('../../public/icons/search-icon.svg');
                cursor: pointer;
            }

            .inactive {
                display: none;
            }
        `;
    }

    constructor() {
        super();
        this.searchFormActive = false;
        this.classes = {inactive: false}
    }

    render() {
        return html`
            <header id="header">
                <label for="btn-menu"></label>
                <g935-title
                    class=${this.searchFormActive ? 'inactive' : ''} 
                >MOVIEAPP</g935-title>
                <button 
                    id="btnSearch-Active" 
                    class=${this.searchFormActive ? 'inactive' : ''} 
                    @click=${this._activeSearchForm}
                ></button>
                <g935-searchform
                    class=${!this.searchFormActive ? 'inactive' : ''} 
                ></g935-searchform>
            </header>
        `;
    }

    _activeSearchForm() {
        this.searchFormActive = !this.searchFormActive;
        console.log('Activado/desactivado');
    }
}
customElements.define('g935-header', Header);