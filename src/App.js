import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from './api/api';

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
      <div className="app-container">
        <Menu />
        <Main />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
