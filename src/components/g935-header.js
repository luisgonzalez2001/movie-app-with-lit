import { LitElement, html, css } from "lit";
import { Title } from "./g935-title";
import { SearchForm } from "./g935-searchform";
import { HeaderMenu } from "./g935-header-menu";

export class Header extends LitElement {
    static get properties() {
        return {
            searchFormActive: {type: Boolean},
            headerMenuActive: {type: Boolean},
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

            .menu-icon {
                width: 30px;
                height: 30px;
                border: none;
                background: center / contain no-repeat url('../../public/icons/options-icon.svg');
                cursor: pointer;
            }

            .search-icon {
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
        this.headerMenuActive = false;
    }

    render() {
        return html`
            <header id="header">
                <button
                    class='menu-icon'
                    @click=${this._activeHeaderMenu}
                ></button>
                <g935-title
                    class=${this.searchFormActive ? 'inactive' : ''} 
                >MOVIEAPP</g935-title>
                <button 
                    id="btnSearch-Active" 
                    class=${this.searchFormActive ? 'inactive' : 'search-icon'} 
                    @click=${this._activeSearchForm}
                ></button>
                <g935-searchform
                    class=${!this.searchFormActive ? 'inactive' : ''} 
                    @close-searchForm=${this._activeSearchForm}
                ></g935-searchform>
            </header>
            <g935-header-menu 
                ?activeMenuContainer=${this.headerMenuActive}
                @close_menu=${() => this.headerMenuActive = !this.headerMenuActive}    
            ></g935-header-menu>
        `;
    }

    _activeSearchForm() {
        this.searchFormActive = !this.searchFormActive;
    }

    _activeHeaderMenu() {
        this.headerMenuActive = !this.headerMenuActive;
    }
}
customElements.define('g935-header', Header);