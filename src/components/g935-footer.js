import { LitElement, html, css } from 'lit-element';

export class Footer  extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
            margin-top: 40px;
          }

          footer {
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-top: 1px solid var(--Gray);
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
            <footer>Luis Gonzalez | 2024 ❤ </footer>
        `;
    }
}
customElements.define('g935-footer', Footer);