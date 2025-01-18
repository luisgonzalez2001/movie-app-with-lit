import { LitElement, css, html } from 'lit'
import { Header } from './components/g935-header'
import { MovieSection } from './components/g935-movie-section'
import { MovieDetail } from './components/g935-movie-detail'
import { Api } from './components/g935-api'

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
        <g935-movie-section type='trending'>Trending</g935-movie-section>
      </main>
      <g935-api 
        query='trending'
        @get-data=${(e) => console.log(e.detail.data.results)}  
      ></g935-api>
    `
  }
}
customElements.define('my-element', MyElement);
