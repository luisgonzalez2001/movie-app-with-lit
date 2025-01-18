import { LitElement, html, css } from 'lit-element';

export class Button  extends LitElement {
    static get styles() {
      return css`
        :host {
          display: block;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          height: 100%;
          padding: 5px;
          border-radius: 8px;
          border: none;
          background-color: var(--Red);
          color: var(--White);
          font-size: 1.4rem;
          font-family: var(--font-family-text);
          font-weight: var(--font-weight-title1);
          cursor: pointer;
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