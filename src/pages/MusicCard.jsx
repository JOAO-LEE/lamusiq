import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  state = {
    loadingAlert: false,
    favoriteOptions: false,
  };

  handleCheck = ({ target }) => {
    this.setState(
      {
        [target.name]:
          target.type === 'checkbox' ? target.checked : target.value,
      },
      this.favoriteAppliance,
    );
  };

  favoriteAppliance = async () => {
    this.setState({ loadingAlert: true });
    await addSong(this.props);
    this.setState({ loadingAlert: false });
  };

  componentDidMount = () => {
    this.favoriteAppliance();
  }

  render() {
    const { loadingAlert, favoriteOptions } = this.state;
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
            name="favorites"
            checked={ favoriteOptions }
            onChange={ this.handleCheck }
            data-testid={ `checkbox-music-${song}` }
            type="checkbox"
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
};
