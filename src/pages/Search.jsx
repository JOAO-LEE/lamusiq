import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default class Search extends Component {
  state = {
    inputSearch: '',
    searchButton: true,
    loadingAlert: false,
    arrayOfArtists: [],
    artistName: '',
  }

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ inputSearch: value }, this.searchButtonGrant);
  }

  searchButtonGrant = () => {
    const { inputSearch } = this.state;
    const requiredLength = 2;
    if (inputSearch.length >= requiredLength) {
      this.setState({ searchButton: false });
    } else {
      this.setState({ searchButton: true });
    }
  }

  searchArtist = async () => {
    const { inputSearch } = this.state;
    this.setState({ loadingAlert: true });
    const requisition = await searchAlbumsAPI(inputSearch);
    console.log(requisition);

    this.setState({
      artistName: inputSearch,
      arrayOfArtists: requisition,
      loadingAlert: false },
    this.searchButtonGrant);
    this.setState({ inputSearch: '', searchButton: true });
  }

  render() {
    const { inputSearch, searchButton, loadingAlert,
      arrayOfArtists, artistName } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        { loadingAlert ? <Loading />
          : (
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
                  onClick={ this.searchArtist }
                  data-testid="search-artist-button"
                  id="button-search"
                  type="button"
                  disabled={ searchButton }
                >
                  Pesquisar
                </button>
              </label>
            </form>)}
        {!arrayOfArtists.length ? (<h3>Nenhum álbum foi encontrado</h3>)
          : (<h3>{`Resultado de álbuns de: ${artistName}`}</h3>)}
        <ul>
          {arrayOfArtists.length && arrayOfArtists.map((artist) => (
            <li key={ artist.collectionId }>
              <Link
                data-testid={ `link-to-album-${artist.collectionId}` }
                to={ `/album/${artist.collectionId}` }
              >
                { artist.collectionName }
              </Link>
              <img
                key={ artist.artistId }
                src={ artist.artworkUrl100 }
                alt={ `Capa do álbum ${artist.collectionName}` }
              />
              <h6>{artist.collectionName}</h6>
              <h6>{artist.artistName}</h6>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
