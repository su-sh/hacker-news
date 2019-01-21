import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Loading from '.././Loading';
import ROUTES from '../../routes/routes';
import { getTimeDifference } from '../../utils/utils';

import '../../App.css';
import upImg from '../../assets/up.png';
/**
 * This class renders individual story item.
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
    this.state = {
      id: this.props.id,
      by: undefined,
      url: undefined,
      time: undefined,
      score: undefined,
      title: undefined,
      descendants: undefined,

      idLoaded: false
    };
  }

  /**
   *
   *
   * @memberof StoryListItem
   */
  componentDidMount() {
    this.setState({
      by: 'dhouston',
      descendants: 7,
      id: 18950807,
      score: 111,
      time: 1547923143,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      url: 'http://www.getdropbox.com'
    });
    this.setState({
      idLoaded: true
    });
  }

  /**
   *
   *
   * @returns {object}
   * @memberof Post
   */
  render() {
    return this.state.idLoaded ? (
      <div className="post-item clearfix">
        <div className="post-top-section clearfix">
          <div className="left post-position">1.</div>

          <div className="left post-position-arrow">
            <img className="up-img" src={upImg} />
          </div>

          <div className="left post-title">
            <a href={this.state.url}>{this.state.title}</a>
          </div>

          <div className="left post-url">({this.state.url})</div>
        </div>

        <div className="post-bottom-section clearfix">
          <div className="post-points left">{this.state.score} points</div>

          <div className="post-by left">
            by
            <Link to="#">{this.state.by}</Link>
          </div>

          <div className="post-time left">
            <Link to={ROUTES.ITEM + this.state.id}>
              {getTimeDifference(this.state.time)} hours ago
            </Link>
          </div>

          <div className="post-hide left">hide</div>

          <div className="left">next</div>

          {this.state.descendants === 0 ? (
            <WithoutComment />
          ) : (
            <WithComment
              id={this.state.id}
              descendants={this.state.descendants}
            />
          )}
        </div>
      </div>
    ) : (
      <Loading />
    );
  }

}

StoryListItem.propTypes = {
  id: PropTypes.number
};

export default StoryListItem;

/**
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
  descendants: PropTypes.array
};

/**
 *
 *
 * @returns {object}
 */
const WithoutComment = () => {
  return (
    <div className="clearfix left post-new">
      <div className="left">web</div>
      <div className="left ">discuss</div>
    </div>
  );
};
