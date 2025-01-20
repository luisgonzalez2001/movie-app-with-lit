import { LitElement } from "lit";
import axios from "axios";

export class Api extends LitElement {
    static get properties() {
        return {
            query: { type: String},
            idMovie: { type: String},
        }
    }

    constructor() {
        super();
        this.api = axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            params: {
                'api_key': '93756a62724af70588873543b635e793',
            },
        });
    }

    render() {
        this.getData();
    }

    _sendData(data){
        const event = new CustomEvent('get-data', {
            detail: { data }
        });
        this.dispatchEvent(event);
    }

    async getData() {
        switch (this.query) {
            case 'trending':
                await this.getTrendingMovies();
                break;
            case 'upcoming':
                await this.getUpcomingMovies();
                break;
            case 'popular':
                await this.getPopularMovies();
                break;
            case 'genres':
                await this.getGenres();
                break;
            case 'movie':
                await this.getMovieById(this.idMovie);
                break;
            case 'moviesByGenre':
                await this.getMoviesByCategory(this.idMovie)
                break;
            case 'moviesBySearch':
                await this.getMoviesBySearch(this.idMovie)
                break;
            case 'related':
                await this.getRelatedMovies(this.idMovie)
                break;
            default:
                console.log('Invalid query type');
        }
    }

    async getTrendingMovies() {
        const { data } = await this.api('trending/movie/day');
        this._sendData(data);
    }

    async getUpcomingMovies() { 
        const { data } = await this.api('movie/upcoming'); 
        this._sendData(data);
    } 
    
    async getPopularMovies() { 
        const { data } = await this.api('movie/popular'); 
        this._sendData(data);
    }

    async getGenres() { 
        const { data } = await this.api('genre/movie/list');
        this._sendData(data);
    }

    async getMovieById(id) {
        if(id) {
            const { data } = await this.api('movie/' + id);
            this._sendData(data); 
        } else {
            console.log('Error en el id');
        }
    }

    async getMoviesByCategory(id) {
        const {data} = await this.api('discover/movie', {
            params: {
                with_genres: id,
            },
        });
        this._sendData(data);
    }

    async getMoviesBySearch(query) {
        const {data} = await this.api('search/movie', {
            params: {
                query,
            },
        });
        this._sendData(data)
    }

    async getRelatedMovies(id) {
        if(id) {
            const { data } = await this.api(`movie/${id}/recommendations`);
            this._sendData(data);
        } else {
            console.log('Error en el id');
        }
    }
}
customElements.define('g935-api', Api);