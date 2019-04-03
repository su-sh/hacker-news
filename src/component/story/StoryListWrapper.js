import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getPosition } from '../../utils/utils';
import { STORY_TYPE } from '../../constants/api';
import { fetchStoriesIndexArray, fetchItem } from '../../api/api';
import { MAX_NO_OF_STORIES } from '../../constants/commonConstants';
import { fetchBookmarksAction } from '../../actions/bookmarkActions';

import Loading from '../Loading';
import StoryListItem from './StoryListItem';
import PaginationFooter from '../Pagination';
import JobListItem from '../jobs/JobListItem';

/**
 * This is a listWrapper component for both stories and job items.
 *
 * @class StoryListWrapper
 * @augments {Component}
 */
class StoryListWrapper extends Component {

  /**
   * Creates an instance of Newest.
   *
   * @memberof StoryListWrapper
   */
  constructor() {
    super();

    this.state = {
      currentPageNumber: 0,
      allStoriesIdList: undefined,

      stories: [],
      isLoaded: false
    };

    this.start = this.state.currentPageNumber * MAX_NO_OF_STORIES;
    this.end = this.start + MAX_NO_OF_STORIES;
  }

  /**
   *
   *
   * @memberof Newest
   */
  componentDidMount = async () => {
    await fetchStoriesIndexArray(this.props.storyType).then(res => {
      this.setState({
        allStoriesIdList: res.data,

        isLoaded: false
      });
      this.props.fetchBookmarksAction();
      this.loadStories();
    });
  };

  /**
   *
   *
   * @param {*} prevProps
   * @param {*} prevState
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentPageNumber !== this.state.currentPageNumber) {
      // Total number of stories that current page should conatin
      const totalNosOfStoriesInCurrentPage =
        (this.state.currentPageNumber + 1) * MAX_NO_OF_STORIES;

      if (this.state.stories.length < totalNosOfStoriesInCurrentPage) {
        this.loadStories();
      }
    }
  };

  /**
   *
   * @param {object} nextProps
   * @memberof Bookmarks
   */
  componentWillReceiveProps = nextProps => {
    const bookmarksArray = nextProps.bookmarks.bookmarks;
  };

  /**
   *
   * This function fetches stories.
   *
   */
  loadStories = () => {
    this.setIsLoaded(false);

    for (let i = this.start; i < this.end; i++) {
      // handles last list item
      if (i >= this.state.allStoriesIdList.length) {
        this.setIsLoaded(true);

        return;
      }
      fetchItem(this.state.allStoriesIdList[i]).then(res => {
        this.setState({
          stories: [ ...this.state.stories, res.data ]
        });

        // last element loading
        if (i === this.end - 1) {
          this.setIsLoaded(true);
        }
      });
    }
  };

  /**
   *
   * @param {boolean} bool
   * @memberof StoryListWrapper
   */
  setIsLoaded = bool => {
    this.setState({
      isLoaded: bool
    });
  };

  /**
   * This function handles previous click.
   *
   * @memberof StoryListWrapper
   */
  handlePreviousPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber--;
    this.setState({
      currentPageNumber
    });
  };

  /**
   * This function handles next click.
   *
   * @memberof StoryListWrapper
   */
  handleNextPaginationClick = () => {
    let currentPageNumber = this.state.currentPageNumber;

    currentPageNumber++;
    this.setState({
      currentPageNumber
    });
  };

  /**
   * This function checks if next button is disabled.
   *
   * @param {number} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledRight = currentPageNumber => {
    if (
      (currentPageNumber + 1) * MAX_NO_OF_STORIES >=
      this.state.allStoriesIdList.length
    ) {
      return true;
    } else {
      return this.getDisableStatus();
    }
  };

  /**
   * This function checks if previous button is disabled.
   *
   * @param {*} currentPageNumber
   * @returns {boolean}
   * */
  isDisabledLeft = currentPageNumber => {
    if (currentPageNumber === 0) {
      return true;
    } else {
      return this.getDisableStatus();
    }
  };

  /**
   *
   *
   * @returns {boolean}
   */
  getDisableStatus = () => {
    if (!this.state.isLoaded) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * This function generates and returns array of StoryListItems or JobsListItems for current page.
   *
   * @returns {array} Returns array of StoryListItem or JobListItem.
   * */
  getStoryList = () => {
    return this.state.stories
      .slice(this.start, this.end)
      .map((story, index) => {
        if (STORY_TYPE.JOB_STORIES === this.props.storyType) {
          return (
            <JobListItem
              position={getPosition(index, this.state.currentPageNumber)}
              key={story.id}
              id={story.id}
              data={story}
            />
          );
        } else {
          return (
            <StoryListItem
              position={getPosition(index, this.state.currentPageNumber)}
              key={story.id}
              id={story.id}
              data={story}
            />
          );
        }
      });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof StoryListWrapper
   */
  render() {
    this.start = this.state.currentPageNumber * MAX_NO_OF_STORIES;
    this.end = this.start + MAX_NO_OF_STORIES;

    const storyList = this.getStoryList();

    return (
      <div>
        {storyList}

        {!this.state.isLoaded ? <Loading /> : ''}

        {this.state.allStoriesIdList ? (
          <PaginationFooter
            currentPageNumber={this.state.currentPageNumber}
            handlePreviousPaginationClick={this.handlePreviousPaginationClick}
            handleNextPaginationClick={this.handleNextPaginationClick}
            isDisabledLeft={this.isDisabledLeft}
            isDisabledRight={this.isDisabledRight}
          />
        ) : (
          ''
        )}
      </div>
    );
  }

}

StoryListWrapper.propTypes = {
  storyType: PropTypes.string
};

/**
 *
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = state => ({
  bookmarks: state.bookmarks
});

export default connect(mapStateToProps, { fetchBookmarksAction })(
  StoryListWrapper
);
