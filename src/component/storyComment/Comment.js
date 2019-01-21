import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import '../../App.css';
import upImg from '../../assets/up.png';
import Loading from '.././Loading';
import CommentContainer from './CommentContainer';
import { getTimeDifference } from '../../utils/utils';

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

  componentDidMount = () => {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${this.state.id}.json`)
      .then(res => {
        console.log(res.data);

        this.setState(
          {
            by: res.data.by,
            id: res.data.id,
            kids: res.data.kids,
            parent: res.data.parent,
            text: res.data.text,
            time: res.data.time,
            type: res.data.type,
            componentLoaded: true
          },
          () => {
            console.log('stateData', this.state);
          }
        );
      })
      .catch(err => {
        console.log(err);
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
            <img src={upImg} />
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
