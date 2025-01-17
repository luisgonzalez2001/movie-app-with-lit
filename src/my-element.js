import { LitElement, css, html } from 'lit'
import { Header } from './components/g935-header'
import { HeaderMenu } from './components/g935-header-menu'

export class MyElement extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <g935-header></g935-header>
      <g935-header-menu></g935-header-menu>
    `
  }

  static get styles() {
    return css`
    `
  }
}

window.customElements.define('my-element', MyElement)
