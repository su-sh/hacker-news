import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../storyComment/CommentContainer';
import '../../App.css';

/**

   {
    "by" : "dhouston",
    "descendants" : 71, :::// 71 comments
    "id" : 8863,
    "kids" : [ 9224, 8952, 8917, 8884, 8887, 8869, 8940, 8908, 8958, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876 ],
    "score" : 104,
    "time" : 1175714200,
    "title" : "My YC app: Dropbox - Throw away your USB drive",
    "type" : "story",
    "url" : "http://www.getdropbox.com/u/2/screencast.html"
    }

   */

/**
 * This is a class that holds individual story
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
      by: undefined,
      descendants: undefined,
      id: undefined,
      kids: [],
      score: undefined,
      time: undefined,
      title: undefined,
      type: undefined,
      url: undefined
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
      descendants: 71,
      id: 8863,
      kids: [18951388, 18952593],
      score: 111,
      time: 1547923143,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      type: 'story',
      url: 'http://www.getdropbox.com'
    });
    this.setState({
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
              <div className="left post-position-arrow">^</div>
              <div className="left post-title">
                <a href={this.state.url}>{this.state.title}</a>
              </div>
              <div className="left post-url">({this.state.url})</div>
            </div>
            <div className="post-bottom-section clearfix">
              <div className="post-points left">{this.state.score} points</div>
              <div className="post-by left">
                by
                <Link to="#">{' ' + this.state.by}</Link>
              </div>
              <div className="post-time left">6 hours ago</div>
              <div className="post-comment left">
                <Link to="#"> 14 comment</Link>
              </div>

              <div className="clearfix left post-new">
                <div className="left">web</div>
              </div>
            </div>
          </div>

          <form className="comment-form">
            <textarea />
            <br />
            <input type="submit" value="Add Comment" />
          </form>
        </div>
        {this.state.kids.length ? (
          <CommentContainer kids={this.state.kids} />
        ) : (
          ''
        )}
      </div>
    );
  }

}

export default Story;
