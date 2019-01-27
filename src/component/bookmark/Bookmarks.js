import React, { Component } from 'react';

import { logout } from '../auth';
/**
 *
 *
 * @export
 * @class bookmarks
 * @extends {Component}
 */
export default class bookmarks extends Component {

  /**
   * Creates an instance of bookmarks.
   *
   * @memberof bookmarks
   */
  constructor() {
    super();
  }

  handleLogout = () => {
    logout();
    this.props.history.push('/');
  };

  /**
   *
   *
   * @returns {object}
   * @memberof bookmarks
   */
  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>Logoout</button>
        This is Bookmark
      </div>
    );
  }

}
