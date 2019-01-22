import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import upImg from '../../assets/up.png';
import CommentContainer from '../storyComment/CommentContainer';
import { getTimeDifference, getHostname } from '../../utils/utils';

import '../../App.css';

/**
 * This is a component holds and render individual story.
 *
 * @class Story
 * @extends {Component}
 */
class Story extends Component {

  /**
   * Creates an instance of Story.
   *
   * @memberof Story
   */
  constructor() {
    super();
    this.state = {
      id: undefined,
      kids: [],
      by: undefined,
      url: undefined,
      time: undefined,
      type: undefined,
      score: undefined,
      title: undefined,
      descendants: undefined,

      text: undefined
    };
  }

  /**
   *
   *
   * @memberof StoryListItem
   */
  componentDidMount() {
    const data = this.props.data;

    this.setState({
      id: data.id,
      by: data.by,
      url: data.url,
      kids: data.kids,
      time: data.time,
      type: data.type,
      score: data.score,
      title: data.title,
      descendants: data.descendants,

      text: data.text,
      componentLoaded: true
    });
  }

  /**
   *
   *
   * @returns {object}
   * @memberof Story
   */
  render() {
    return (
      <div>
        <div>
          <div className="post-item clearfix">
            <div className="post-top-section clearfix">
              <div className="left post-position-arrow">
                <img alt="up-icon" src={upImg} />
              </div>

              <div className="left post-title">
                <a href={this.state.url}>{this.state.title}</a>
              </div>

              <div className="left post-url">
                ({getHostname(this.state.url)})
              </div>
            </div>

            <div className="post-bottom-section clearfix">
              <div className="post-points left">{this.state.score} points</div>

              <div className="post-by left">
                by
                <Link to="#">{' ' + this.state.by}</Link>
              </div>

              <div className="post-time left">
                {getTimeDifference(this.state.time)}
              </div>

              <div className="post-comment left">
                <Link to="#"> {this.state.descendants} comment</Link>
              </div>

              <div className="clearfix left post-new">
                <div className="left">
                  <a
                    href={`http://www.google.com/search?q=${this.state.title}`}
                  >
                    web
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="comment-form">
            <textarea />
            <br />
            <input type="submit" value="Add Comment" />
          </form>
        </div>
        {this.state.descendants ? (
          <CommentContainer kids={this.state.kids} />
        ) : (
          ''
        )}
      </div>
    );
  }

}

export default Story;
