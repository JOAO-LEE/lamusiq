import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  state = {
    nameInput: '',
    loadingAlert: true,
  }

  componentDidMount = () => {
    this.userNameRequest();
  }

  userNameRequest = async () => {
    const requestedUser = await getUser();
    this.setState({ nameInput: requestedUser.name, loadingAlert: false });
  }

  render() {
    const { nameInput, loadingAlert } = this.state;
    if (loadingAlert) return <Loading />;
    return (
      <header data-testid="header-component" className="header-container">
        <h1 className="principal-header">lamusiq</h1>
        <p data-testid="header-user-name" className="user-name">
          {`Welcome, ${nameInput}!`}
        </p>
        <nav className="navbar">
          <ul className="list">
            <li className="list-links">
              <Link data-testid="link-to-search" to="/search">Search</Link>
            </li>
            <li className="list-links">
              <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
            </li>
            <li className="list-links">
              <Link data-testid="link-to-profile" to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
