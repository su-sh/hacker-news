import React, { Component } from 'react';

import Menu from './Menu';
/**
 *
 *
 * @class Header
 * @extends {Component}
 */
class Header extends Component {

  /**
   *
   *
   * @returns {object}
   * @memberof Header
   */
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }

}

export default Header;
