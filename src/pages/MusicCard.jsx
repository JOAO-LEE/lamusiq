import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
state = {
  loading: false,
  favoriteOption: false,
}

handleCheck = ({ target }) => {
  const { checked } = target;
  this.setState({ favoriteOption: checked }, this.favoriteAppliance);
}

favoriteAppliance = async () => {
  const { song } = this.props;
  this.setState({ loading: true });
  await addSong(song);
  this.setState({ loading: false });
}

render() {
  const { loading, favoriteOption } = this.state;
  const { songSnippet, songName, song } = this.props;
  return (
    <div>
      { loading
        ? (<Loading />)
        : (
          <>
            <h2
              className="song-name"
            >
              { songName }
            </h2>
            <audio data-testid="audio-component" src={ songSnippet } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
            </audio>
            <label
              className="favorite-text"
              htmlFor="favorite-button"
            >
              Favorita
              <input
                checked={ favoriteOption }
                onChange={ this.handleCheck }
                id="favorite-button"
                type="checkbox"
                data-testid={ `checkbox-music-${song}` }
              />
            </label>
          </>
        )}
    </div>
  );
}
}
MusicCard.propTypes = {
  songSnippet: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
};
