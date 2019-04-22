import React, { Component } from "react";
import { Container, Form } from "./styles";
import moment from "moment";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import logo from "../../assests/logo.png";

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: "",
    repositories: []
  };

  render() {
    const { repositories, repositoryInput } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
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

  handleChangeName = e => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddRepository = async e => {
    e.preventDefault();
    try {
      const { repositories, repositoryInput } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: "",
        repositories: [...repositories, repository],
        repositoryError: false
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };
}
