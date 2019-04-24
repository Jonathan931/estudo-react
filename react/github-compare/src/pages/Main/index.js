import React, { Component } from "react";
import { Container, Form } from "./styles";
import moment from "moment";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import logo from "../../assests/logo.png";

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: "",
    repositories: []
  };

  render() {
    const { repositories, repositoryInput, loading } = this.state;

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
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : "OK"}
          </button>
        </Form>

        <CompareList
          repositories={repositories}
          remove={this.handleRemoveRepository}
          update={this.handleUpdateRepository}
        />
      </Container>
    );
  }

  componentDidMount() {
    let repositories = localStorage.getItem("repositoryGitHub");
    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories)
      });
    }
  }

  handleChangeName = e => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleAddRepository = e => {
    e.preventDefault();
    const { repositoryInput } = this.state;
    this.searchRepository(repositoryInput);
  };

  searchRepository = async (repositoryInput, isUpdate) => {
    const { repositories } = this.state;
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      const repositoriesFinal = !isUpdate
        ? [...repositories, repository]
        : repositories.map(repos =>
            repos.id === repository.id ? repository : repos
          );

      this.setState({
        repositoryInput: "",
        repositories: repositoriesFinal,
        repositoryError: false
      });
      this.updateLocalStorage(repositoriesFinal);
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRemoveRepository = id => {
    if (window.confirm("Deseja realizar a exclusão?")) {
      const repositories = this.state.repositories.filter(
        repository => repository.id !== id
      );
      this.updateLocalStorage(repositories);
      this.setState({
        repositories
      });
    }
  };

  handleUpdateRepository = id => {
    const repository = this.state.repositories.filter(
      repos => repos.id === id
    )[0];
    this.searchRepository(`${repository.owner.login}/${repository.name}`, true);
  };

  updateLocalStorage = repositoriesFinal => {
    localStorage.setItem("repositoryGitHub", JSON.stringify(repositoriesFinal));
  };
}
