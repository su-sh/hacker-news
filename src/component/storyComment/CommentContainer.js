import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

/**
 * This Component contains multiple ID of comments from same thread.
 *
 * @class CommentContainer
 * @extends {Component}
 */
class CommentContainer extends Component {
  /**
   * Creates an instance of CommentContainer.
   *
   * @param {*} props
   * @memberof CommentContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      idList: this.props.kids
    };
  }

  /**
   *
   *
   * @returns {object}
   * @memberof CommentContainer
   */
  render() {
    const commentList = this.state.idList.map(commentId => {
      return <Comment key={commentId} id={commentId} />;
    });

    return <div>{commentList}</div>;
  }
}

CommentContainer.propTypes = {
  kids: PropTypes.array
};

export default CommentContainer;
