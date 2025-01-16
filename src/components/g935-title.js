import { LitElement, html, css } from "lit-element";

export class Title extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      h1 {
        font-size: 3.2rem;
        font-family: var(--font-family-titles);
        color: var(--Red);
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
    return html` <h1><slot></slot></h1> `;
  }
}

customElements.define("g935-title", Title);
