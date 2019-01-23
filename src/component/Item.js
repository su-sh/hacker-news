import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Story from './story/Story';
import { getItem } from '../api/api';

/**
 * This Component renders data according to the items type.
 *
 * @class Item
 * @extends {Component}
 */
class Item extends Component {

  /**
   * Creates an instance of Item.
   *
   * @memberof Item
   */
  constructor() {
    super();
    this.state = {
      type: undefined,
      data: undefined
    };
  }

  componentDidMount = async () => {
    const itemId = this.props.match.params.id;

    const data = await getItem(itemId);

    this.setState({
      type: data.type,
      data: data
    });
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Item
   */
  render() {
    return (
      <div>
        {this.state.type === 'story' && <Story data={this.state.data} />}
      </div>
    );
  }

}

Item.propTypes = {
  match: {
    params: {
      id: PropTypes.number
    }
  }
};
export default Item;
