import { LitElement, html, css } from 'lit-element';
import { MovieSection } from './g935-movie-section'
import { MovieDetail } from './g935-movie-detail'
import { Api } from './g935-api'
import { GenresSection } from './g935-genres-section'
import { Header } from './g935-header'
import { Footer } from './g935-footer';
import { MovieList } from './g935-movie-list';

export class Navigation  extends LitElement {
    static get styles() {
      return css`
        main {
            padding: 0 20px;
        }
      `;
    }

    static get properties() {
        return {};
    }

    constructor() {
        super();
        window.addEventListener('hashchange', () => this._onHasChange(), false);
    }


    render() {
        window.scroll(0,0);
        if(location.hash.startsWith('#trending')) {
             return this._trendsPage();
        } else if(location.hash.startsWith('#search=')) {
            return this._searchPage();
        } else if(location.hash.startsWith('#upcoming')) {
            return this._upcomingPage();
        } else if(location.hash.startsWith('#popular')) {
            return this._popularPage();
        } else if(location.hash.startsWith('#movie=')) {
            return this._movieDetailPage();
        } else if(location.hash.startsWith('#category=')) {
            return this._categoriesPage();
        } else {
             return this._homePage();
        }
    }

    _homePage() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-movie-detail></g935-movie-detail>
                <g935-movie-section type='trending'>Trending</g935-movie-section>
                <g935-movie-section type='popular'>Popular</g935-movie-section>
                <g935-movie-section type='upcoming'>Upcoming</g935-movie-section>
                <g935-genres-section>Categories</g935-genres-section>
            </main>
            <g935-footer></g935-footer>
        `;
    }

    _trendsPage() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-movie-list type='trending'>Trending</g935-movie-list>
            </main>
            <g935-footer></g935-footer>
        `;
    }

    _popularPage() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-movie-list type='popular'>Popular</g935-movie-list>
            </main>
            <g935-footer></g935-footer>
        `;
    }

    _upcomingPage() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-movie-list type='upcoming'>Upcoming</g935-movie-list>
            </main>
            <g935-footer></g935-footer>
        `;
    }

    _categoriesPage() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-movie-list type='moviesByGenre' ?genres=${true}>Categories</g935-movie-list>
            </main>
            <g935-footer></g935-footer>
        `;
    }

    _searchPage() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-movie-list type='moviesBySearch'>Search</g935-movie-list>
            </main>
            <g935-footer></g935-footer>
        `;
    }

    _movieDetailPage() {
        return html`
            <g935-header></g935-header>
            <main>
                <g935-movie-detail 
                    idMovie=${location.hash.split('=')[1]}
                    ?detail=${true}    
                ></g935-movie-detail>
            </main>
            <g935-footer></g935-footer>
        `;
    }

    _onHasChange() {
        this.requestUpdate();
    }
}
customElements.define('g935-navigation', Navigation);