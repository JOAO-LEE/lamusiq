import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { updateUser, getUser } from '../services/userAPI';
import Header from './Header';

export default class ProfileEdit extends Component {
  state = {
    name: '',
    email: '',
    description: '',
    photoURL: '',
    saveButton: true,
    updatedUser: false,
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value }, this.buttonGrantment);
  }

  buttonGrantment = () => {
    const { name, email, description, photoURL } = this.state;
    const validationCamps = name && email && description && photoURL;
    if (validationCamps.length >= 1) {
      this.setState({ saveButton: false });
    } else {
      this.setState({ saveButton: true });
    }
  }

  getUserInfo = async () => {
    const user = await getUser();
    this.setState({ name: user.name,
      email: user.email,
      description: user.description,
      photoURL: user.image,
      saveButton: false });
  }

  userUpdate = async () => {
    const { name, email, description, photoURL } = this.state;
    this.setState({ updatedUser: true });
    await updateUser({
      name, email, description, image: photoURL,
    });
  }

  componentDidMount = async () => {
    await this.getUserInfo();
  }

  render() {
    const { saveButton, name, email, description, photoURL, updatedUser } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Edite o seu perfil</p>
        <label htmlFor="user-name">
          Nome:
          <input
            value={ name }
            onChange={ this.handleChange }
            name="name"
            id="user-name"
            type="text"
            data-testid="edit-input-name"
          />
        </label>
        <label htmlFor="user-email">
          Email:
          <input
            value={ email }
            onChange={ this.handleChange }
            name="email"
            id="user-email"
            type="email"
            data-testid="edit-input-email"
          />
        </label>
        <label htmlFor="user-description">
          Descrição:
          <input
            value={ description }
            onChange={ this.handleChange }
            name="description"
            id="user-description"
            type="text"
            data-testid="edit-input-description"
          />
        </label>
        <label htmlFor="photo-url">
          Foto URL
          <input
            value={ photoURL }
            onChange={ this.handleChange }
            name="photoURL"
            id="photo-url"
            type="text"
            data-testid="edit-input-image"
          />
        </label>
        <button
          onClick={ this.userUpdate }
          disabled={ saveButton }
          type="submit"
          data-testid="edit-button-save"
        >
          Salvar
        </button>
        { updatedUser && <Redirect to="/profile" /> }
      </div>
    );
  }
}
