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
        };
    }

    constructor() {
        super();
        this.movies = [];
    }

    render() {
        return html`
            <section>
                ${this.getMovies()}
                <div class="trendingPreview-header">
                    <h2><slot></slot></h2>
                    <g935-button>SEE ALL</g935-button>
                </div>
                <article>
                    ${this.movies.map(movie => html`
                        <g935-movie movie=${movie}></g935-movie> 
                    `)}
                </article>
            </section>
        `;
    }

    getMovies() {
        console.log('hola');
        
        return html`
            <g935-api 
                query=${this.type}
                @get-data=${(e) => this.movies = e.detail.data.results}  
            ></g935-api>
        `;
    }
}

customElements.define('g935-movie-section', MovieSection);