import React, { Component } from 'react';

import { logout } from '../auth';
import { getPosition } from '../../utils/utils';

import { fetchBookmarks, fetchItem } from '../../api/api';
import StoryListItem from '../story/StoryListItem';

/**
 *
 *
 * @class bookmarks
 * @augments {Component}
 */
export default class bookmarks extends Component {

  /**
   * Creates an instance of bookmarks.
   *
   * @memberof bookmarks
   */
  constructor() {
    super();
    this.state = {
      allStoriesIdList: undefined,
      stories: []
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      fetchBookmarks().then(res => {
        const storiesId = [];

        for (let i = 0; i < res.data.bookmarks.length; i++) {
          storiesId.push(res.data.bookmarks[i].storyid);
        }

        this.setState({
          allStoriesIdList: storiesId
        });

        this.loadStories();
      });
    }
  };

  /**
   * This function loads individual story item.
   *
   * @returns {*}
   */
  loadStories = async () => {
    const slicedArray = this.state.allStoriesIdList;

    /* eslint-disable no-await-in-loop */
    for (const item of slicedArray) {
      console.log(item);
      await fetchItem(item).then(res => {
        console.log(res);
        this.setState({
          stories: [...this.state.stories, res.data]
        });
      });
    }

    // this.setIsLoaded(true);
  };

  handleLogout = () => {
    logout();
    this.props.history.push('/');
  };

  /**
   * This function generates and returns array of StoryListItems for current page.
   *
   * @returns {array} Returns array of StoryListItem.
   * */
  getStoryList = () => {
    return this.state.stories
      .slice(this.start, this.end)
      .map((story, index) => {
        return (
          <StoryListItem
            position={getPosition(index, this.state.currentPageNumber)}
            key={story.id}
            id={story.id}
            data={story}
          />
        );
      });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof bookmarks
   */
  render() {
    const stories = this.getStoryList();

    return (
      <div>
        <button onClick={this.handleLogout}>Logoout</button>
        This is Bookmark
        <div>{this.state.allStoriesIdList}</div>
        {stories}
      </div>
    );
  }

}
