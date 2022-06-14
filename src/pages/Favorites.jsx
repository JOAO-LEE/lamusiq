import React, { Component } from 'react';
import Header from './Header';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';
// import Loading from './Loading';

export default class Favorites extends Component {
  // state = {
  //   loading: false,
  //   favoritedSongs: [],
  // }

  // getFavorited = async () => {
  //   this.setState({ loading: true });
  //   const favorited = await getFavoriteSongs();
  //   this.setState({ loading: false, favoritedSongs: favorited });
  // }

  // componentDidMount = async () => {
  //   await this.getFavorited();
  // }

  render() {
    // const { loading, favoritedSongs } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
      </div>
    );
  }
}
