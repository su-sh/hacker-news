import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import {
  getHostname,
  getSearchUrl,
  getTimeDifference
} from '../../utils/utils';
import { saveBookmark } from '../../api/api';

import ROUTES from '../../constants/routes';

import '../../App.css';
import bookmarkSave from '../../assets/bookmarkSave.png';
import bookmarkUnsave from '../../assets/bookmarkUnsave.png';
/**
 * This class renders story item on list.
 *
 * @class StoryListItem
 * @extends {Component}
 */
class StoryListItem extends Component {

  /**
   * Creates an instance of StoryListItem.
   *
   * @param {object} props
   * @memberof StoryListItem
   */
  constructor(props) {
    super(props);
    const data = this.props.data;

    this.state = {
      id: data.id,
      by: data.by,
      url: data.url,
      time: data.time,
      score: data.score,
      title: data.title,
      descendants: data.descendants,

      position: this.props.position,
      idLoaded: true
    };
  }

  /**
   *
   * @param {string} url
   * @returns {object}
   * @memberof StoryListItem
   */
  showHostName = url => {
    const showUrl = getHostname(url);

    if (showUrl === 'localhost') {
      return '';
    } else {
      return `(${showUrl})`;
    }
  };
  handelBookmarkClick = () => {
    saveBookmark(this.state.id).then(res => {
      console.log(res);
    });
  };
  /**
   *
   *
   * @returns {object}
   * @memberof Post
   */
  render() {
    return (
      <div className="post-item clearfix">
        <div className="post-left left clearfix">
          <div className="left post-position">{this.state.position}.</div>
          <div
            className="right post-position-arrow"
            onClick={this.handelBookmarkClick}>
            <img className="up-img" alt="up-img" src={bookmarkUnsave} />
          </div>
        </div>
        <div className="left post-right clearfix">
          <div className="post-top-section clearfix">
            <div className="left post-title">
              <a href={this.state.url}>{this.state.title}</a>
            </div>

            <div className="left post-url">
              {this.showHostName(this.state.url)}
            </div>
          </div>

          <div className="post-bottom-section clearfix">
            <div className="post-points left">{this.state.score} points</div>

            <div className="post-by left">by {this.state.by}</div>

            <div className="post-time left">
              {getTimeDifference(this.state.time)}
            </div>

            <div className="left">
              <a href={getSearchUrl(this.state.title)}>web</a>
            </div>

            {this.state.descendants === 0 ? (
              <WithoutComment id={this.state.id} />
            ) : (
              <WithComment
                id={this.state.id}
                descendants={this.state.descendants}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

}

StoryListItem.propTypes = {
  id: PropTypes.number
};

export default StoryListItem;

/**
 * This component is to be rendered if there is comment.
 *
 * @param {object} props
 * @returns {object}
 */
const WithComment = props => {
  return (
    <div className="post-comment left">
      <Link to={ROUTES.ITEM + props.id}>{props.descendants} comment</Link>
    </div>
  );
};

WithComment.propTypes = {
  id: PropTypes.number,
  descendants: PropTypes.number
};

/**
 * This component is to be rendered if there is no comment.
 *
 * @param {object} props
 * @returns {object}
 */
const WithoutComment = props => {
  return (
    <div className="clearfix left post-new">
      <div className="left ">
        <Link to={ROUTES.ITEM + props.id}>discuss</Link>
      </div>
    </div>
  );
};

WithoutComment.propTypes = {
  id: PropTypes.number,
  position: PropTypes.number
};
