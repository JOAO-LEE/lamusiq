import React, { Component } from 'react';
import Header from './Header';

export default class Search extends Component {
  state = {
    inputSearch: '',
    searchButton: true,
  }

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ inputSearch: value }, this.searchButtonGrant);
  }

  searchButtonGrant = () => {
    const { inputSearch } = this.state;
    const requiredLength = 2;
    if (inputSearch.length >= requiredLength) this.setState({ searchButton: false });
    else {
      this.setState({ searchButton: true });
    }
  }

  render() {
    const { inputSearch, searchButton } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="input-search">
            <input
              onChange={ this.handleChangeSearch }
              id="input-search"
              data-testid="search-artist-input"
              value={ inputSearch }
              type="text"
              className="search-input"
              placeholder="Pesquise aqui!"
            />
            <button
              onClick={ this.searchButtonGrant }
              data-testid="search-artist-button"
              id="button-search"
              type="submit"
              disabled={ searchButton }
            >
              Pesquisar
            </button>
          </label>
        </form>
      </div>
    );
  }
}
