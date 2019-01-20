import React, { Component } from 'react';
import CommentContainer from './CommentContainer';
import '../../App.css';
import PropTypes from 'prop-types';
import { getTimeDifference } from '../../utils/utils';
// test
import axios from 'axios';

/**
 *
 *
 *
 "by" : "dhouston",
  "id" : 9272,
  "kids" : [ 9479 ],
  "parent" : 9224,
  "text" : "1. re: the first part, many people want something plug and play. and even if they were plug and play, the problem is that the user experience (on windows at least) with online drives generally sucks, and you don't have disconnected access.<p>windows for sure doesn't hide latency well (CIFS is bad, webdav etc. are worse), and most apps are written as if the disk was local, and assume, for example, accessing a file only takes a few ms. if the server is 80ms away, and you do 100 accesses (e.g. the open file common dialog listing a directory and poking files for various attributes or icons) serially, suddenly your UI locks up for _seconds_ (joel spolsky summarizes this well in his article on leaky abstractions.) ditto saving any file; you change one character in your 20mb word file and hit save, and your upstream-capped 40k/sec comcast connection is hosed for 8 minutes. sure for docs of a few hundred k it's fine, but doing work on large docs on an online drive feels like walking around with cinder blocks tied to your feet. anyway, the point of that rant was that dropbox uses a _local_ folder with efficient sync in the background, which is an important difference :)<p>2. true, if you're both not at your computer and on another computer without net access, this won't replace a usb drive :) but the case i'm worried about is being, for example, on a plane, and dropbox will let you get to the most recent version of your docs at the time you were last connected, and will sync everything up when you get back online (without you having to copy anything or really do anything.)<p>3. there are some unannounced viral parts i didn't get to show in there :) it'll be a freemium model. up to x gb free, tiered plans above that.",
  "time" : 1175791621,
  "type" : "comment"
 */

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
      componentLoaded: false,
      by: undefined,
      id: this.props.id,
      kids: undefined,
      parent: undefined,
      text: undefined,
      time: undefined,
      type: undefined
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
    const commentElement = this.state.componentLoaded ? (
      <div className="comment">
        <div className="comment-top clearfix">
          <div className="left">^</div>
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
    ) : (
      <div className="loader" />
    );

    return <div>{commentElement}</div>;
  }

}

Comment.propTypes = {
  id: PropTypes.number
};

export default Comment;
