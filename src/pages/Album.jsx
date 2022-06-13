import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

export default class Album extends Component {
  state = {
    artist: '',
    album: '',
    coverArt: '',
    songPreviews: [],
  }

  componentDidMount = async () => {
    await this.albumRequestApi();
  }

  albumRequestApi = async () => {
    const { match: { params: { id } } } = this.props;
    const albumRequest = await getMusics(id);
    this.setState({ songPreviews: albumRequest,
      artist: albumRequest[0].artistName,
      album: albumRequest[0].collectionName,
      coverArt: albumRequest[0].artworkUrl100 });
  }

  render() {
    // console.log(this.props);
    const { songPreviews, artist, album, coverArt } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <img src={ coverArt } alt={ `Capa do álbum ${album}` } />
        <h2
          data-testid="artist-name"
          className="artist-name"
        >
          {artist}
        </h2>
        <h1
          data-testid="album-name"
          className="artist-name"
        >
          {album}
        </h1>
        {songPreviews.filter((skipAlbum) => skipAlbum.kind).map(
          ({
            collectionName,
            trackId,
            previewUrl,
            trackName,
          }) => (
            <MusicCard
              key={ collectionName }
              song={ trackId }
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
