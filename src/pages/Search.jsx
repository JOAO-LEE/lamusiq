import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Carregando from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  state = {
    search: '',
    enablement: true,
    loading: false,
    foundAlbuns: [],
    artist: '',
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value }, this.buttonEnablement);
  }

  buttonEnablement = () => {
    const { search } = this.state;
    if (search.length >= 2) {
      this.setState({ enablement: false });
    } else {
      this.setState({ enablement: true });
    }
  }

  searchAlbum = async () => {
    const { search } = this.state;
    this.setState({ loading: true });
    const searchAlbuns = await searchAlbumsAPI(search);
    console.log(searchAlbuns);
    this.setState({ artist: search,
      foundAlbuns: searchAlbuns,
      loading: false,
      search: '' }, this.buttonEnablement);
  }

  render() {
    const { search, enablement, loading, foundAlbuns, artist } = this.state;
    return (
      <div
        data-testid="page-search"
      >
        <Header />
        { loading ? <Carregando />
          : (
            <form action="">
              <input
                onChange={ this.handleChange }
                value={ search }
                type="text"
                data-testid="search-artist-input"
              />
              <button
                onClick={ this.searchAlbum }
                disabled={ enablement }
                type="button"
                data-testid="search-artist-button"
              >
                Pesquisar
              </button>
            </form>)}
        {!foundAlbuns.length ? (<h3>Nenhum álbum foi encontrado</h3>)
          : (<h3>{`Resultado de álbuns de: ${artist}`}</h3>)}
        <ul>
          {foundAlbuns.length && foundAlbuns
            .map(({ collectionName, artistName, collectionId, artworkUrl100 }) => (
              <li key={ collectionId }>
                <img
                  src={ artworkUrl100 }
                  alt={ `Capa do álbum ${collectionName}, do artista ${artistName}` }
                />
                <Link
                  to={ `/album/${collectionId}` }
                  data-testid={ `link-to-album-${collectionId}` }
                >
                  {collectionName}
                </Link>
                <h4>{ artistName }</h4>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
