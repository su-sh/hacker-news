import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Story from './story/Story';
import { fetchItem } from '../api/api';
import ROUTES from '../constants/routes';

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
  /**
   *
   *
   * @memberof Item
   */
  redirectToNotFound() {
    this.props.history.replace({ pathname: ROUTES.NOT_FOUND });
  }

  componentDidMount = async () => {
    const itemId = this.props.match.params.id;
    fetchItem(itemId).then(res=>{
      const data = res.data;
      if (data && data.type === 'story') {
        this.setState({
          type: data.type,
          data: data
        });
      } else {
        this.redirectToNotFound();
      }
    });

  };

  /**
   *
   *
   * @returns {object}
   * @memberof Item
   */
  render() {
    return <div>{this.state.data && <Story data={this.state.data} />}</div>;
  }

}

Item.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default Item;
