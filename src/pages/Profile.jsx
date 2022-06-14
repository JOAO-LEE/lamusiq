import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Header from './Header';
import Loading from './Loading';

export default class Profile extends Component {
  state = {
    loading: false,
    user: {},
  }

  savedProfile = async () => {
    this.setState({ loading: true });
    const userInfo = await getUser();
    this.setState({ user: userInfo, loading: false });
  }

  componentDidMount = async () => {
    await this.savedProfile();
  }

  render() {
    const { user, loading } = this.state;
    return (
      <div
        data-testid="page-profile"
      >
        <Header />
        {loading ? <Loading />
          : (
            <div>
              <p className="song-name">{ user.name }</p>
              <img
                src={ user.image }
                alt="foto de perfil"
                data-testid="profile-image"
              />
              <h4>{ user.description }</h4>
              <h5>{ user.email }</h5>
              <Link
                className="artist-name"
                to="/profile/edit"
              >
                Editar perfil
              </Link>
            </div>)}
      </div>
    );
  }
}
