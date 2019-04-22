import React, { Component } from 'react';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';
import logo from '../../assests/logo.png';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  render() {
    const { repositories, repositoryInput } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={this.handleChangeName}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }

  handleChangeName = (e) => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    try {
      const { repositories, repositoryInput } = this.state;
      const response = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
      });
    } catch (err) {
      console.log(err);
    }
  };
}
