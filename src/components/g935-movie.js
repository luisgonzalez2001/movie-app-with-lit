import { LitElement, html, css } from 'lit-element';

export class Movie  extends LitElement {
    static get styles() {
        return css`
            div {
                min-width: 130px;
            }

            img {
                width: 100%;
                min-height: 190px;
                border-radius: 8px;
            }

            p {
                padding: 5px 0 15px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
        `;
      }

    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div>
                <img 
                    src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                    alt="Movie title"
                />
                <p>Movie Title</p>
            </div>
        `;
    }
}
customElements.define('g935-movie', Movie);