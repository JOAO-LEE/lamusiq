import React, { Component } from 'react';
import Header from './Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from './MusicCard';
import Loading from './Loading';

export default class Favorites extends Component {
  state = {
    loading: false,
    favoritedSongs: [],
  }

  getFavorited = async () => {
    this.setState({ loading: true });
    const favorited = await getFavoriteSongs();
    this.setState({ loading: false, favoritedSongs: favorited });
  }

  favoriteUpdates = (tracks) => {
    this.setState({ loading: true });
    const { favoritedSongs } = this.state;
    this.setState({
      favoritedSongs: favoritedSongs.filter((id) => id.trackId !== tracks),
    });
  }

  componentDidMount = async () => {
    await this.getFavorited();
  }

  render() {
    const { loading, favoritedSongs } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {loading && <Loading />}
        {/* <div> */}
        {
          favoritedSongs.map((favorited) => (
            <MusicCard
              key={ favorited.trackId }
              trackId={ favorited.trackId }
              music={ favorited }
              songName={ favorited.trackName }
              songSnippet={ favorited.previewUrl }
              update={ this.favoriteUpdates }
            />
          ))
        }
        {/* </div> */}

      </div>
    );
  }
}
