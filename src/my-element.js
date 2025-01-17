import { LitElement, css, html } from 'lit'
import { Header } from './components/g935-header'
import { MovieSection } from './components/g935-movie-section'
import { MovieDetail } from './components/g935-movie-detail'

export class MyElement extends LitElement {
  static get styles() {
    return css`
      main {
        padding: 0 20px;
      }
    `
  }

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
      <main>
        <g935-movie-detail></g935-movie-detail>
        <g935-movie-section>Trending</g935-movie-section>
        <g935-movie-section>Popular</g935-movie-section>
        <g935-movie-section>Upcoming</g935-movie-section>
      </main>
    `
  }
}

window.customElements.define('my-element', MyElement)
