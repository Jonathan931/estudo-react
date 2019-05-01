import React from 'react';
import Sidebar from './components/Sidebar';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }} className="App">
      <Sidebar />
      <GlobalStyles />
    </div>
  );
}

export default App;
