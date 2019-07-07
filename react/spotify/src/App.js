import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { Wrapper, Container } from './styles/components';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>
      <Player />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
