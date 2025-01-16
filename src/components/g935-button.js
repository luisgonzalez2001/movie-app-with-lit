import { LitElement, html, css } from 'lit-element';

export class Button  extends LitElement {
    static get styles() {
      return css`
        :host {
          display: block;
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
            <button><slot></slot></button>
        `;
    }
}

customElements.define('g935-button', Button);