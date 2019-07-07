import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />

        </Content>
      </Container>
      <Player />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
