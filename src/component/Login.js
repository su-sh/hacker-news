import React, { Component } from 'react';

import { signup, login } from './auth';

import ROUTES from '../constants/routes';
/**
 *
 *
 * @class Login
 * @extends {Component}
 */
class Login extends Component {

  /**
   * Creates an instance of Login.
   *
   * @memberof Login
   */
  constructor() {
    super();
    this.state = {
      username: undefined,
      password: undefined
    };
  }

  handleLogin = () => {
    if (this.state.username && this.state.password) {
      if (login(this.state)) {
        this.props.history.replace({ pathname: ROUTES.BOOKMARKS });
      }
    }
  };

  handleSignup = () => {
    if (this.state.username && this.state.password) {
      if (signup(this.state)) {
        // clear input field
      }
    }
  };

  /**
   *
   *
   * @returns {object}
   * @memberof Login
   */
  render() {
    return (
      <div>
        <div className="login">
          <div>Login / Signup</div>
          <div className="login-signup-input">
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="login-signup-input">
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="login-submit-btn clearfix">
            <button className="left" type="submit" onClick={this.handleSignup}>
              Sign Up
            </button>
            <button className="right" type="submit" onClick={this.handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
  /**
   *
   * @param {object} e Event.
   * @memberof Login
   */
  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

}

export default Login;
