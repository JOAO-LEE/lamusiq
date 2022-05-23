import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
// import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {
    nameInput: '',
    accessButton: true,
    loadingAlert: false,
    accessGranted: false,
  }

  handleChangeName = (event) => {
    const { value } = event.target;
    this.setState({ nameInput: value }, this.buttonUpdate);
  }

  buttonUpdate = () => {
    const { nameInput } = this.state;
    const requiredLength = 3;
    if (nameInput.length >= requiredLength) this.setState({ accessButton: false });
    else {
      this.setState({ accessButton: true });
    }
  }

  loginAuthentication = async () => {
    const { nameInput } = this.state;
    this.setState({ loadingAlert: true });
    await createUser({ name: nameInput });
    this.setState({ loadingAlert: false, accessGranted: true });
  }

  render() {
    const { nameInput, accessButton, loadingAlert, accessGranted } = this.state;
    return (
      <div data-testid="page-login">
        {loadingAlert ? <Loading />
          : (
            <form>
              <label htmlFor="cadname">
                Nome:
                <input
                  name="loginName"
                  onChange={ this.handleChangeName }
                  data-testid="login-name-input"
                  value={ nameInput }
                  type="text"
                  id="cadname"
                  placeholder="Digite seu nome"
                />
                <button
                  data-testid="login-submit-button"
                  onClick={ this.loginAuthentication }
                  name="submitbutton"
                  disabled={ accessButton }
                  type="submit"
                >
                  Entrar
                </button>
              </label>
            </form>)}
        { accessGranted && <Redirect to="/search" /> }
      </div>
    );
  }
}
