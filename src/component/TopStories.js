import React, { Component } from 'react';

import Loading from './Loading';
import StoryListItem from './story/StoryListItem';

import { getStoriesIndexArray, STORY_TYPE } from '../api/api';
import { getPosition, getShowStoryList } from '../utils/utils';

import '.././App.css';

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
      allStoryIdList: [],
      showStoryIdList: [],
      currentPage: 0
    };
  }

  /**
   *
   *
   * @memberof TopStories
   */
  componentDidMount = async () => {
    const newArray = await getStoriesIndexArray(STORY_TYPE.TOP_STORIES);

    this.setState({
      allStoryIdList: newArray,
      showStoryIdList: getShowStoryList(newArray, 0)
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof TopStories
   */
  render() {
    return (
      <div>
        {!this.state.showStoryIdList.length ? (
          <Loading />
        ) : (
          this.state.showStoryIdList.map(storyId => {
            return (
              <StoryListItem
                key={storyId}
                position={getPosition(storyId, this.state.allStoryIdList)}
                id={storyId}
              />
            );
          })
        )}

        <button
          onClick={() => {
            let currentPage = this.state.currentPage;

            currentPage--;
            this.setState(
              {
                currentPage
              },
              () => {
                console.log(this.state.currentPage);
                this.setState({
                  showStoryIdList: getShowStoryList(
                    this.state.allStoryIdList,
                    this.state.currentPage
                  )
                });
              }
            );
          }}
        >
          Previous
        </button>

        <button
          onClick={() => {
            let currentPage = this.state.currentPage;

            currentPage++;
            this.setState(
              {
                currentPage
              },
              () => {
                console.log(this.state.currentPage);
                this.setState({
                  showStoryIdList: getShowStoryList(
                    this.state.allStoryIdList,
                    this.state.currentPage
                  )
                });
              }
            );
          }}
        >
          Next
        </button>
      </div>
    );
  }

}

export default TopStories;
