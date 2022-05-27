import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import Header from './Header';

export default class MusicCard extends Component {
  render() {
    const { songSnippet, songName } = this.props;
    return (
      <>
        <h2 className="song-name">{ songName }</h2>
        <audio data-testid="audio-component" src={ songSnippet } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
      </>
    );
  }
}
MusicCard.propTypes = {
  songSnippet: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
};
