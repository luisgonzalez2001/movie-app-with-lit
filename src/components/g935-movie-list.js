import { LitElement, html, css } from 'lit-element';
import { Button } from './g935-button';

export class MovieList  extends LitElement {

    static get styles() {
        return css`
            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            button {
                width: 40px;
                height: 35px;
                padding: 5px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                background: center / 50% no-repeat url('../../public/icons/arrow-left.svg');
                background-color: var(--Red);
            }

            article {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            g935-genres-section {
                display: block;
                padding-bottom: 20px;
            }
        `;
    }

    static get properties() {
        return {
            type: { type: String },
            movies: { type: Array },
            genres: { type: Boolean},
        };
    }

    constructor() {
        super();
        this.movies = [];
        this.genres = false;
        window.addEventListener('hashchange', () => this._onHasChange(), false);
    }

    render() {
        return html`
            <section>
                <g935-api 
                    query=${this.type}
                    idMovie=${location.hash.split('=')[1]}
                    @get-data=${(e) => this.movies = e.detail.data.results}  
                ></g935-api>
                <div>
                    <h2><slot></slot></h2>
                    <button @click=${() => location.hash = window.history.back()}></button>
                </div>
                ${this.genres ? html`
                        <g935-genres-section></g935-genres-section>    
                    ` : ''}
                <article>
                    ${this.movies.map(movie => {
                        return html`
                            <g935-movie .movie=${movie}></g935-movie> 
                        `
                    })}
                </article>
            </section>
        `;
    }

    _onHasChange() {
        this.requestUpdate();
    }
}
customElements.define('g935-movie-list', MovieList);