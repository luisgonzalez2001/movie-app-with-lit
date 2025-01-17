import { LitElement, html, css } from 'lit-element';

export class SearchForm  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
        form {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 3px solid hsla(0, 0%, 100%, .1);
            border-radius: 8px;
            padding-right: 10px;
        }

        input {
            width: 100%;
            display: block;
            height: 30px;
            margin-left: 15px;
            border: none;
            background-color: transparent;
            color: var(--White);
            outline: none;
        }

        button {
            width: 20px;
            height: 20px;
            border: none;
            background: center / contain no-repeat url('../../public/icons/search-icon.svg');
            cursor: pointer;
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
        <form id="searchForm">
            <input type="text" placeholder="Avengers">
            <button></button>
        </form>
    `;
  }
}

customElements.define('g935-searchform', SearchForm);