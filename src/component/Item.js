import React, { Component } from 'react';
import * as api from '../api/api';
import Story from './story/Story';

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
      type: 'err'
    };
  }

  componentDidMount = () => {
    // console.log(this.props.match.params.id);
    const itemId = this.props.match.params.id;

    let itemType = 'none';

    api
      .getItem(itemId)
      .then(res => {
        itemType = res.data.type;
        this.setState({
          type: itemType
        });
      })
      .catch(err => {});
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Item
   */
  render() {
    return <div>{this.state.type === 'story' && <Story />}</div>;
  }

}

export default Item;
