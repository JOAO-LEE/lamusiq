import React, { Component } from 'react';
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
      </header>
    );
  }
}
