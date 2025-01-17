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
            data: {type: Array},
        };
    }

    constructor() {
        super();
        this.data = [];
    }

    render() {
        return html`
            <section>
                <div class="trendingPreview-header">
                    <h2><slot></slot></h2>
                    <g935-button>SEE ALL</g935-button>
                </div>
                <article>
                    <g935-movie></g935-movie>
                    <g935-movie></g935-movie>
                    <g935-movie></g935-movie>
                    <!-- <div class="movie-container">
                        <img 
                            src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                            class="movie-img" 
                            alt="Movie name"
                        />
                        <p class="movie-title">Movie Title</p>
                    </div> -->
                </article>
            </section>
        `;
    }
}

customElements.define('g935-movie-section', MovieSection);