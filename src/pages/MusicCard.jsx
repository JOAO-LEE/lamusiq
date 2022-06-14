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

  // handleCheck = async (event) => {
  //   this.setState({ favoritChecks: event.target.checked }, this.favoriteAppliance);
  // };

  favoriteAppliance = async () => {
    const { favoritChecks } = this.state;
    const { music, update } = this.props;
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
    // console.log(trackId);
    if (favoritedSongs.some((id) => id.trackId === song)) {
      this.setState({ favoritChecks: true, loadingAlert: false });
    } else {
      this.setState({ loadingAlert: false });
    }
  }

  componentDidMount = async () => {
    // this.favoriteAppliance();
    const favorites = await getFavoriteSongs();
    this.setState({ favoritedSongs: favorites });
    this.removeFav();
  }

  render() {
    const { loadingAlert, favoritChecks } = this.state;
    const { songName, songSnippet, song } = this.props;

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
          Favoritar
          <input
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
