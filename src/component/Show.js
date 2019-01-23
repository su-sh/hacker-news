import React, { Component } from 'react';

import Loading from './Loading';
import PaginationFooter from './Pagination';
import StoryListItem from './story/StoryListItem';

/**
 *
 *
 * @class Show
 * @extends {Component}
 */
class Show extends Component {

  /**
   * Creates an instance of Show.
   *
   * @memberof Show
   */
  constructor() {
    super();
    this.state = {
      allStoryIdList: [],
      showStoryIdList: []
    };
  }

  /**
   *
   *
   * @memberof Show
   */
  componentDidMount = () => {
    this.setState({
      allStoryIdList: [],
      showStoryIdList: [123, 45, 45]
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Show
   */
  render() {
    return (
    // <div>
    //   {!this.state.showStoryIdList.length ? (
    //     <Loading />
    //   ) : (
    //     this.state.showStoryIdList.map(storyId => {
    //       return <StoryListItem key={storyId} id={storyId} />;
    //     })
    //   )}
    //   <PaginationFooter />
    // </div>

      <ShowListWrapper showStoryIdList={this.state.showStoryIdList} />
    );
  }

}

export default Show;

/**
 *
 * @param {object} props
 * @returns {object}
 * @memberof Show
 */
const ShowListWrapper = props => {
  return (
    <div>
      {!props.showStoryIdList.length ? (
        <Loading />
      ) : (
        props.showStoryIdList.map(storyId => {
          return <StoryListItem key={storyId} id={storyId} />;
        })
      )}
      <PaginationFooter />
    </div>
  );
};
