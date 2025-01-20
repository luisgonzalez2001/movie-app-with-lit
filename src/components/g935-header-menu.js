import { LitElement, html, css } from 'lit-element';

export class HeaderMenu  extends LitElement {

  static get styles() {
    return css`
        .header-menu-container {
            position: fixed;
            background: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            transition: all 500ms ease;
            z-index: 2;
            opacity: 0;
            visibility: hidden;
        }

        .menu-container{
            width: 100%;
            max-width: 250px;
            background: #1c1c1c;
            height: 100vh;
            position: relative;
            transition: all 500ms ease;
            transform: translateX(-100%);
        }

        nav {
            transform: translateY(15%);
        }

        a {
            display: block;
            text-decoration: none;
            padding: 20px;
            color: var(--White);
            border-left: 5px solid transparent;
            transition: all 400ms ease;
        }

        a:hover {
            border-left: 5px solid var(--Red);
            background: #1f1f1f;
        }

        button {
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
            width: 30px;
            height: 30px;
            border: none;
            background: center / contain no-repeat url('../../public/icons/close.svg');
        }

        .active {
            opacity: 1;
            visibility: visible;
        }

        .translate {
            transform: translateX(0%);
        }
    `;
  }

  static get properties() {
    return {
        activeMenuContainer: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.activeMenuContainer = false;
  }

  render() {
    return html`
        <div class="header-menu-container ${this.activeMenuContainer ? 'active' : ''}">
            <div class="menu-container ${this.activeMenuContainer ? 'translate' : ''}">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#trending">Trending</a>
                    <a href="#category=28">Categories</a>
                    <a href="#popular">Popular</a>
                    <a href="#upcoming">Upcoming</a>
                </nav>
                <button @click=${this._dispatchMenu}></button>
            </div>
        </div>
    `;
  }

  _dispatchMenu(){
    const event = new CustomEvent('close_menu', {
        detail: { activeMenuContainer: this.activeMenuContainer }
    });
    this.dispatchEvent(event);
  }
}

customElements.define('g935-header-menu', HeaderMenu);