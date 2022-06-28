import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  state = {
    loadingAlert: false,
    favoritChecks: false,
    favoritedSongs: [],
  };

  favoriteAppliance = async () => {
    const { favoritChecks } = this.state;
    const { music, update } = this.props;
    // console.log(update);
    this.setState({ loadingAlert: true });
    if (favoritChecks) {
      await removeSong(music);
      this.setState({ favoritChecks: false });
      if (update) {
        update(music.trackId);
      }
    } else {
      await addSong(music);
      this.setState({ favoritChecks: true });
    }
    this.setState({ loadingAlert: false });
  };

  removeFav = () => {
    const { favoritedSongs } = this.state;
    this.setState({ loadingAlert: true });
    const { song } = this.props;
    if (favoritedSongs.some((id) => id.trackId === song)) {
      this.setState({ favoritChecks: false, loadingAlert: false });
    } else {
      this.setState({ loadingAlert: false });
    }
  }

  componentDidMount = async () => {
    const { music } = this.props;
    const favorites = await getFavoriteSongs();
    const isFavorite = favorites.some((favorite) => (
      favorite.trackId === music.trackId));
    this.setState({ favoritedSongs: favorites, favoritChecks: isFavorite });
  }

  render() {
    const { loadingAlert, favoritChecks } = this.state;
    const { songName, songSnippet, song } = this.props;
    console.log(this.props);
    return (
      <>
        {loadingAlert && <Loading />}
        <p>{songName}</p>
        <audio
          id="audio-tag"
          src={ songSnippet }
          data-testid="audio-component"
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>

        <label htmlFor="favorites">
          Favorita
          <input
            aria-label="favorita"
            type="checkbox"
            checked={ favoritChecks }
            onClick={ this.favoriteAppliance }
            data-testid={ `checkbox-music-${song}` }
            id="favorites"
          />
        </label>
      </>
    );
  }
}

MusicCard.propTypes = {
  songName: PropTypes.string.isRequired,
  songSnippet: PropTypes.string.isRequired,
  song: PropTypes.number.isRequired,
  music: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,

};
