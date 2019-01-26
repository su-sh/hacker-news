import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Loading from '.././Loading';

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
      componentLoaded: false
    };
  }

  componentDidMount = async () => {
    const data = await fetchItem(this.state.id);

    this.setState({
      id: data.id,
      by: data.by,
      kids: data.kids,
      text: data.text,
      time: data.time,
      type: data.type,
      parent: data.parent,

      componentLoaded: true
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
      <Loading />
    ) : (
      <div className="comment">
        <div className="comment-top clearfix">
          <div className="left post-position-arrow">
            <img alt="up-img" src={upImg} />
          </div>
          <div className="left">{this.state.by}</div>
          <div className="left">{getTimeDifference(this.state.time)}</div>
        </div>

        <div className="comment-bottom clearfix">
          <div
            className="comment-text"
            dangerouslySetInnerHTML={{ __html: this.state.text }}
          />
        </div>
        {this.state.kids && <CommentContainer kids={this.state.kids} />}
      </div>
    );
  }

}

Comment.propTypes = {
  id: PropTypes.number
};

export default Comment;
