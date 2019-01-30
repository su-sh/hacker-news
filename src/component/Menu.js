import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
import ROUTES from '../constants/routes';

/**
 * This class contains menu elements.
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
          <NavLink to="/">Hacker News</NavLink>
        </div>
        <div className="tab-menu-list left clearfix">
          <ul>
            <li>
              <NavLink to={ROUTES.NEWEST}>new</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ASK}>ask</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.SHOW}>show</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.JOBS}>jobs</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.BOOKMARKS}>bookmarks</NavLink>
            </li>
          </ul>
        </div>
        <div className="right login-menu">Login</div>
      </div>
    );
  }

}

export default Menu;
