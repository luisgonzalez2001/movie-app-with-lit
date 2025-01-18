import { LitElement, html, css } from 'lit-element';

export class GenresSection  extends LitElement {
    static get styles() {
      return css`
            article {
                display: flex;
                gap: 10px;
                overflow-x: scroll;
                margin-top: 20px;
                padding-bottom: 15px;
            }

            button {
                height: 40px;
                padding: 5px 10px;
                border-radius: 8px;
                border: none;
                color: var(--White);
                font-size: 1.4rem;
                font-family: var(--font-family-text);
                font-weight: var(--font-weight-title1);
                cursor: pointer;
                background-color: var(--Gray);
                white-space: nowrap;
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
            genres: {type: Array}
        };
    }

    constructor() {
        super();
        this.genres = [];
    }

    render() {
        return html`
            <section>
                <g935-api 
                    query='genres'
                    @get-data=${(e) => this.genres = e.detail.data.genres}   
                ></g935-api>
                <h2>Categories</h2>
                <article>
                    ${this.genres.map(genre => {
                        return html`
                            <button>${genre.name}</button>    
                        `}
                    )}
                </article>
            </section>
        `;
    }
}


customElements.define('g935-genres-section', GenresSection);