import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

export default class Album extends Component {
  state = {
    artist: '',
    album: '',
    songPreviews: [],
  }

  componentDidMount = async () => {
    await this.albumRequestApi();
  }

  albumRequestApi = async () => {
    const { match: { params: { id } } } = this.props;
    const albumRequest = await getMusics(id);
    console.log(albumRequest);
    this.setState({ songPreviews: albumRequest,
      artist: albumRequest[0].artistName,
      album: albumRequest[0].collectionName });
  }

  render() {
    // const { songPreviews } = this.state;
    const { songPreviews, artist, album } = this.state;
    console.log(songPreviews);
    return (
      <div data-testid="page-album">
        <Header />
        <h2
          data-testid="artist-name"
          className="artist-name"
        >
          {artist}
        </h2>
        <h2
          data-testid="album-name"
          className="artist-name"
        >
          {album}
        </h2>
        {songPreviews.filter((skipAlbum) => skipAlbum.kind).map(
          ({
            collectionId,
            previewUrl,
            trackName,
          }) => (
            <MusicCard
              key={ collectionId }
              songName={ trackName }
              songSnippet={ previewUrl }
            />
          ),
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
