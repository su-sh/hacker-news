import React, { Component } from 'react';
import '../App.css';

/**
 *
 *
 * @class Newest
 * @extends {Component}
 */
class Newest extends Component {

  /**
   * Creates an instance of Newest.
   *
   * @memberof Newest
   */
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      allStoriesIdList: [],
      showStoryIdList: []
    };
  }

  /**
   *
   *
   * @returns {Object}
   * @memberof Newest
   */
  render() {
    return <div>Newest</div>;
  }

}

export default Newest;
