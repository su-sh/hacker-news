import { connect } from 'react-redux';
import React, { Component } from 'react';

import { logout } from '../auth';
import { getPosition } from '../../utils/utils';

import { fetchItem } from '../../api/api';
import StoryListItem from '../story/StoryListItem';
import { fetchBookmarksAction } from '../../actions/bookmarkActions';

/**
 *
 *
 * @class Bookmarks
 * @augments {Component}
 */
class Bookmarks extends Component {

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
      this.props.fetchBookmarksAction();
    }
  };

  /**
   *
   * @param {object} nextProps
   * @memberof Bookmarks
   */
  componentWillReceiveProps = nextProps => {
    const bookmarksArray = nextProps.bookmarks;

    if (bookmarksArray.length) {
      const storiesId = [];

      for (let i = 0; i < bookmarksArray.length; i++) {
        storiesId.push(bookmarksArray[i].storyid);
      }

      this.setState(
        {
          allStoriesIdList: storiesId
        },
        () => {
          this.loadStories();
        }
      );
    }
  };

  /**
   * This function loads individual story item.
   *
   */
  loadStories = () => {
    const slicedArray = this.state.allStoriesIdList;

    /* eslint-disable no-await-in-loop */
    for (const item of slicedArray) {
      fetchItem(item).then(res => {
        this.setState({
          stories: [...this.state.stories, res.data]
        });
      });
    }
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
        {stories}
      </div>
    );
  }

}

/**
 *
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = state => ({
  bookmarks: state.bookmarks.bookmarks
});

export default connect(
  mapStateToProps,
  { fetchBookmarksAction }
)(Bookmarks);
