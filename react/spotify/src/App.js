import React from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';
import { GlobalStyles } from './styles/global';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
          <GlobalStyles />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
