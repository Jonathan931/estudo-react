import React from "react";
import Proptypes from "prop-types";
import { Container, Repository } from "./styles";

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
          <ul>
            <li>
              {repository.stargazers_count} <small>starts</small>
            </li>
            <li>
              {repository.forks_count} <small>forks</small>
            </li>
            <li>
              {repository.open_issues_count} <small>issues</small>
            </li>{" "}
            <li>
              {repository.lastCommit} <small>last commit</small>
            </li>
          </ul>
        </header>
      </Repository>
    ))}
  </Container>
);

CompareList.prototype = {
  repositories: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      name: Proptypes.string,
      owner: Proptypes.shape({
        login: Proptypes.string,
        avatar_url: Proptypes.string
      }),
      stargazers_count: Proptypes.number,
      forks_count: Proptypes.number,
      open_issues_count: Proptypes.number,
      pushed_at: Proptypes.string
    })
  ).isRequired
};

export default CompareList;
