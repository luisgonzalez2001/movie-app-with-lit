import { LitElement, html, css } from 'lit-element';
import { MovieSection } from './g935-movie-section'
import { MovieDetail } from './g935-movie-detail'
import { Api } from './g935-api'
import { GenresSection } from './g935-genres-section'
import { Header } from './g935-header'

export class Navigation  extends LitElement {
    static get styles() {
      return css`
        main {
            padding: 0 20px;
        }
      `;
    }

    static get properties() {
        return {
            idMovie: { type: String}
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-api
                query='trending'
                @get-data=${(e) => {
                    this.idMovie = e.detail.data.results[0].id;
                    console.log(this.idMovie);
                    this.requestUpdate();
                    }}
                ></g935-api>
                <g935-movie-detail idMovie='6'></g935-movie-detail>
                <g935-movie-section type='trending'>Trending</g935-movie-section>
                <g935-movie-section type='popular'>Popular</g935-movie-section>
                <g935-movie-section type='upcoming'>Upcoming</g935-movie-section>
                <g935-genres-section></g935-genres-section>
            </main>
        `;
    }
}
customElements.define('g935-navigation', Navigation);