import { LitElement, html, css } from 'lit-element';

export class HeaderMenu  extends LitElement {

  static get styles() {
    return css`
        :host {
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

        .header-menu-container {
            
        }

        #btn-menu:checked ~ .header-menu-container {
            opacity: 1;
            visibility: visible;
        }

        .menu-container {
            width: 100%;
            max-width: 250px;
            background: #1c1c1c;
            height: 100vh;
            position: relative;
            transition: all 500ms ease;
            transform: translateX(-100%);
        }

        #btn-menu:checked ~ .header-menu-container .menu-container {
            transform: translateX(0%);
        }

        .menu-container nav {
            transform: translateY(15%);
        }

        .menu-container nav a {
            display: block;
            text-decoration: none;
            padding: 20px;
            color: var(--White);
            border-left: 5px solid transparent;
            transition: all 400ms ease;
        }

        .menu-container nav a:hover {
            border-left: 5px solid var(--Red);
            background: #1f1f1f;
        }

        .header-menu-close-icon {
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
            width: 30px;
            height: 30px;
            background: center / contain no-repeat url('../assets/icons/close.svg');
        }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <div class="header-menu-container">
            <div class="menu-container">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#trends">Trending</a>
                    <a href="#category=">Categories</a>
                    <a href="#popular">Popular</a>
                    <a href="#upcoming">Upcoming</a>
                </nav>
                <label for="btn-menu" class="header-menu-close-icon"></label>
            </div>
        </div>
    `;
  }
}

customElements.define('g935-header-menu', HeaderMenu);