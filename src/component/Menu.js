import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import ROUTES from '../routes/routes';

/**
 * This class contains Menu Elements.
 *
 * @class Menu
 * @extends {Component}
 */
class Menu extends Component {

  /**
   *
   *
   * @returns {object}
   * @memberof Menu
   */
  render() {
    return (
      <div className="menu clearfix">
        <div className="logo left">
          <Link to="/">Hacker News</Link>
        </div>
        <div className="tab-menu-list left clearfix">
          <ul>
            <li>
              <Link to={ROUTES.NEWEST}>new</Link>
            </li>
            <li>
              <Link to={ROUTES.ASK}>ask</Link>
            </li>
            <li>
              <Link to={ROUTES.SHOW}>show</Link>
            </li>
            <li>
              <Link to={ROUTES.JOBS}>jobs</Link>
            </li>
            <li>
              <Link to={ROUTES.SUBMIT}>submit</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Menu;
