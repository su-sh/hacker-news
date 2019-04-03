import { connect } from 'react-redux';
import React, { Component } from 'react';

import ROUTES from '../constants/routes';
import { fetchBookmarksAction } from '../actions/bookmarkActions';

import { signup, login } from '../component/auth';

/**
 *
 *
 * @class Login
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
      const user = {
        username: this.state.username,
        password: this.state.password
      };

      login(user)
        .then(res => {
          if (res.status === 200) {
            const token = res.data.token;

            localStorage.setItem('token', token);

            alert('login sucessful');
            this.props.history.push(ROUTES.BOOKMARKS);
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
    }
  };

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

}

/**
 *
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = state => ({
  bookmarks: state.bookmarks
});

export default connect(mapStateToProps, { fetchBookmarksAction })(Login);
