import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import Count from './count';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList/>
          <Count/>
        </div>
      </Provider>  
    );
  }
}

export default App;
