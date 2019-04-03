import { Provider } from 'react-redux';
import React, { Component } from 'react';

import store from './store';

import Menu from './component/Menu';
import Main from './component/Main';

import './App.css';

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {

  /**
   *
   *
   * @returns {object}
   * @memberof App
   */
  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <Menu />
          <Main />
        </div>
      </Provider>
    );
  }

}

App.propTypes = {};

export default App;
