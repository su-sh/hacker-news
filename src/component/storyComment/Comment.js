import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { fetchItem } from '../../api/api';
import CommentContainer from './CommentContainer';
import { getTimeDifference } from '../../utils/utils';

import '../../App.css';
import upImg from '../../assets/up.png';

/**
 *
 *
 * @class Comment
 * @extends {Component}
 */
class Comment extends Component {

  /**
   * Creates an instance of Comment.
   *
   * @param {object} props
   * @memberof Comment
   */
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      by: undefined,
      type: undefined,
      kids: undefined,
      text: undefined,
      time: undefined,
      parent: undefined,
      showReplies: false,
      componentLoaded: false
    };
  }

  componentDidMount = async () => {
    await fetchItem(this.state.id).then(res => {
      const data = res.data;

      this.setState({
        id: data.id,
        by: data.by,
        kids: data.kids || [],
        text: data.text,
        time: data.time,
        type: data.type,
        parent: data.parent,

        componentLoaded: true
      });
    });
  };

  toggleReplies = () => {
    let showReplies = this.state.showReplies;

    showReplies = !showReplies;
    this.setState({
      showReplies
    });
  };
  /**
   *
   *
   * @returns {object}
   * @memberof Comment
   */
  render() {
    return !this.state.componentLoaded ? (
      ''
    ) : (
      <div className="comment">
        <div className="comment-top clearfix">
          <div className="left post-position-arrow">
            <img alt="up-img" src={upImg} />
          </div>
          <span className="left">{this.state.by}</span>
          <span className="left">{getTimeDifference(this.state.time)}</span>
          <span className="left comment-replies" onClick={this.toggleReplies}>
            {this.state.kids.length} replies
          </span>
        </div>

        <div className="comment-bottom clearfix">
          <div
            className="comment-text"
            dangerouslySetInnerHTML={{ __html: this.state.text }}
          />
        </div>

        {this.state.showReplies
          ? this.state.kids && <CommentContainer kids={this.state.kids} />
          : ''}
      </div>
    );
  }

}

Comment.propTypes = {
  id: PropTypes.number
};

export default Comment;
