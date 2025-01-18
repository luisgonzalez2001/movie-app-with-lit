import { LitElement, html, css } from 'lit-element';

export class MovieDetail  extends LitElement {
    static get styles() {
        return css`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            :host {
                font-family: var(--font-family-text);
                font-weight: var(--font-weight-text1);
            }
            
            img {
                width: 100%;
                min-height: 190px;
                border-radius: 8px;
            }
            
            .movieDetail__background {
                height: 70vh;
                width: 100%;
                position: absolute;
                top: 0;
                right: 0;
                opacity: 0.8;
                border-radius: 11%;
                background-position: 50%;
                background-size: cover;
                box-shadow: inset 1px -62px 33px -19px rgba(0,0,0,.8);
                z-index: -1;
            }

            .movieDetail-info {
                height: calc(100vh - 60px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: end;
                padding-bottom: 60px;
            }

            .movieDetail-datas {
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 20px;
                text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
            }

            .movieDetail-score {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
            }

            .movieDetail-category {
                padding: 5px 10px;
                background-color: var(--Red);
                border-radius: 8px;
                text-shadow: none;
                box-shadow: 0 7px 29px 0 rgba(0,0,0,0.2);
            }

            .movieDetail-texts {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                margin-bottom: 20px;
                text-align: center;
            }

            .movieDetail-title {
                text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
            }

            .movieDetail-buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }

            g935-button {
                height: 45px;
                width: 170px;
            }

            .score-icon {
                color: var(--Red);
            }

            .play-icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                background: center / contain no-repeat url('../../public/icons/play-icon.svg');
            }

            .info-icon {
                width: 45px;
                height: 45px;
                border-radius: 8px;
                cursor: pointer;
                background: center / 16px 16px no-repeat url('../../public/icons/info-icon.svg');
                background-color: var(--Gray);
            }

            .inactive {
                display: none;
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
            <section id="movieDetail" class="movieDetail-container pad20">
                <div class="movieDetail__background">
                    <img src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg">
                </div>
                <div class="movieDetail-info">
                    <div class="movieDetail-datas">
                        <div class="movieDetail-score">
                            <span class="score-icon">★</span>
                            <p class="movieDetail-score__text"> 7.5</p>
                        </div>
                        •
                        <p class="movieDetail-time">1h 55m</p>
                        •
                        <p class="movieDetail-category">TRENDING</p>
                    </div>
                    <div class="movieDetail-texts">
                        <h2 class="movieDetail-title">Movie Title</h2>
                        <p class="movieDetail-description inactive">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fugit dignissimos eius quaerat volupta
                        </p>
                    </div>
                    <div class="movieDetail-buttons">
                        <g935-button><span class="play-icon"></span> PLAY TRAILER</g935-button>
                        <a class="movieDetail-btn-info info-icon"></a>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('g935-movie-detail', MovieDetail);