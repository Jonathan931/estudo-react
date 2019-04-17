import React from 'react';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import logo from '../../assests/logo.png';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />
    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
