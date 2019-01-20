import React, { Component } from 'react';

/**
 *
 *
 * @class CommentItem
 * @extends {Component}
 */
class CommentItem extends Component {

  /**
   *
   *
   * @returns {object}
   * @memberof CommentItem
   */
  render() {
    return (
      <div>
        Comment
        <div className="comment-top clearfix">
          <div className="comment-username left">username</div>

          <div className="comment-time left">0 minutes ago</div>

          <div className="comment-parent left">parent</div>

          <div className="comment-parent left">on: POST TITLE</div>
        </div>
      </div>
    );
  }

}

export default CommentItem;
