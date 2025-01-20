import { LitElement, html, css } from 'lit-element';
import { Movie } from './g935-movie';
import { Button } from './g935-button';

export class MovieSection  extends LitElement {
    static get styles() {
        return css`
            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            article {
                display: flex;
                gap: 15px;
                overflow-x: scroll;
            }

            *::-webkit-scrollbar {
                height: 5px; /* Altura de la barra de desplazamiento en Chrome, Safari y Opera */
            }

            *::-webkit-scrollbar-track {
                background: var(--Gray); /* Color de fondo de la barra de desplazamiento */
                border-radius: 10px;
            }

            *::-webkit-scrollbar-thumb {
                background-color: var(--Red); /* Color del "pulgar" de la barra de desplazamiento */
                border-radius: 10px; /* Bordes redondeados */
            }

            *::-webkit-scrollbar-thumb:hover {
                background-color: #96261e;
            }
        `;
    }

    static get properties() {
        return {
            type: {type: String},
            movies: {type: Array},
            idMovie: { type: String },
        };
    }

    constructor() {
        super();
        this.movies = [];
        this.idMovie = '';
    }

    render() {
        return html`
            <section>
                <g935-api 
                    query=${this.type}
                    idMovie=${this.idMovie}
                    @get-data=${(e) => this.movies = e.detail.data.results}  
                ></g935-api>
                <div>
                    <h2><slot></slot></h2>
                    ${this.type === 'related' ? '' : html`
                        <g935-button @click=${() => location.hash = this.type}>SEE ALL</g935-button>
                    `}
                </div>
                <article>
                    ${this.postMovies()}
                </article>
            </section>
        `;
    }

    postMovies() {
        if(this.type === 'trending'){
            this.movies.shift();
        }
        return html`
            ${this.movies.map(movie => {
                return html`
                    <g935-movie .movie=${movie} ?min=${true}></g935-movie> 
                `
            })}
        `;
    }
}

customElements.define('g935-movie-section', MovieSection);