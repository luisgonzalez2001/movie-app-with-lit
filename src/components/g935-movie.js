import { LitElement, html, css } from 'lit-element';

export class Movie  extends LitElement {
    static get styles() {
        return css`
            div {
                width: 150px
            }

            img {
                width: 100%;
                min-height: 190px;
                border-radius: 8px;
            }

            p {
                margin: 0;
                padding: 5px 0 15px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
        `;
      }

    static get properties() {
        return {
            movie: { type: Object }
        };
    }

    constructor() {
        super();
        this.movie = {};
    }

    render() {
        return html`
            <div>
                <img 
                    src="https://image.tmdb.org/t/p/w300${this.movie.poster_path}"
                    alt="Movie title"
                />
                <p>${this.movie.title}</p>
            </div>
        `;
    }
}
customElements.define('g935-movie', Movie);