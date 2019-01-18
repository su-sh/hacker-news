import React, { Component } from 'react';
import * as api from '../api/api';

/**
 *
 *
 * @class TopStories
 * @extends {Component}
 */
class TopStories extends Component {

  /**
   * Creates an instance of TopStories.
   *
   * @memberof TopStories
   */
  constructor() {
    super();
    this.state = {
      postIdList: []
    };
  }

  componentDidMount = () => {
    const storiesIndexPromise = api.getStoriesIndex('topstories');

    storiesIndexPromise
      .then((req, res) => {
        this.setState({
          postIdList: req.data
        });
      })
      .catch();
  };

  /**
   *
   *
   * @returns {object}
   * @memberof TopStories
   */
  render() {
    return <div>TopStories</div>;
  }

}

export default TopStories;
