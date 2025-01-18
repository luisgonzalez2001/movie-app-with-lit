import { LitElement, css, html } from 'lit'
import { Navigation } from './components/g935-navigation';

export class MyElement extends LitElement {
  static get styles() {
    return css`
    `
  }

  static get properties() {
    return {}
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <g935-navigation></g935-navigation>
    `
  }
}
customElements.define('my-element', MyElement);
