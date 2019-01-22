import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

import { getItem } from '../api/api';
import { getTimeDifference, getHostname } from '../utils/utils';

import '../App.css';

/**
 *
 *
 * @class JobListItem
 * @extends {Component}
 */
class JobsListItem extends Component {
  /**
   *  Creates an instance of JobListItem.
   *
   * @param {*} props
   * @memberof JobListItem
   */
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      by: undefined,
      url: undefined,
      time: undefined,
      type: undefined,
      score: undefined,
      title: undefined,

      idLoaded: false
    };
  }

  /**
   *
   *
   * @memberof StoryListItem
   */
  componentDidMount = async () => {
    const data = await getItem(this.state.id);

    this.setState({
      id: data.id,
      by: data.by,
      url: data.url,
      time: data.time,
      type: data.type,
      score: data.score,
      title: data.title,

      idLoaded: true
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof JobListItem
   */
  render() {
    console.log(this.state);

    return !this.state.idLoaded ? (
      <Loading />
    ) : (
      <div>
        <div className="jobs-item clearfix">
          <div className="jobs-top clearfix">
            <div className="jobs-title left">
              <a href={this.state.url}>{this.state.title}</a>
            </div>
            <div className="jobs-url left">{getHostname(this.state.url)}</div>
          </div>
          <div className="jobs-bottom clearfix">
            {getTimeDifference(this.state.time)}
          </div>
        </div>
      </div>
    );
  }
}

JobsListItem.propTypes = {
  id: PropTypes.number
};

export default JobsListItem;
