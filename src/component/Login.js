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

  handleLogin = async () => {
    if (this.state.username && this.state.password) {
      const user = {
        username: this.state.username,
        password: this.state.password
      };

      login(user)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            const token = res.data.token;

            localStorage.setItem('token', token);

            alert('login sucessful');
            this.props.history.push(ROUTES.BOOKMARKS);

            // return true;
          }
        })
        .catch(err => {
          if (err.response.status === 401) {
            alert('username or password doesnot match');
          } else {
            alert('login error occured');
          }

          return false;
        });
      // if (login(user)) {
      //   console.log('logged in');
      //   this.props.history.push(ROUTES.BOOKMARKS);

      //   // this.props.history.replace({ pathname: ROUTES.BOOKMARKS });
      // } else {
      //   console.log('not login');
      // }
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
