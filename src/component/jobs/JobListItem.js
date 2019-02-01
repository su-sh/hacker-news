import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Loading from '../Loading';

import { fetchItem } from '../../api/api';
import { getTimeDifference, getHostname } from '../../utils/utils';

import '../../App.css';

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
    const data = this.props.data;

    this.state = {
      id: data.id,
      by: data.by,
      url: data.url,
      time: data.time,
      type: data.type,
      score: data.score,
      title: data.title,

      idLoaded: true
    };
  }

  showUrl = () => {
    if (this.state.url !== undefined) {
      return getHostname(this.state.url);
    }
  };

  /**
   *
   *
   * @returns {object}
   * @memberof JobListItem
   */
  render() {
    return (
      <JobListItemContent
        showUrl={this.showUrl}
        title={this.state.title}
        url={this.state.url}
        time={this.state.time}
      />
    );
  }

}

JobsListItem.propTypes = {
  id: PropTypes.number
};

export default JobsListItem;

/**
 * Functional Component.
 * If job item contains url then this component renders job item's content.
 *
 * @param {object} props
 * @returns {*}
 */
const JobListItemContent = props => {
  if (props.url) {
    return (
      <div>
        <div className="jobs-item clearfix">
          <div className="jobs-top clearfix">
            <div className="jobs-title left">
              <a href={props.url}>{props.title}</a>
            </div>

            <div className="jobs-url left">{props.showUrl()}</div>
          </div>

          <div className="jobs-bottom clearfix">
            {getTimeDifference(props.time)}
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
};

JobListItemContent.propTypes = {
  props: PropTypes.object
};
