import React, { Component } from 'react';
import { signup, login } from './auth';
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
      login(this.state);
    }
  };

  handleSignup = () => {
    if (this.state.username && this.state.password) {
      signup(this.state);
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
        Login
        <div className="login">
          <div>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.inputChangeHandler}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.inputChangeHandler}
            />
            <button type="submit" onClick={this.handleLogin}>
              Login
            </button>
          </div>
        </div>
        Signup
        <div className="signup">
          <div>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.inputChangeHandler}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.inputChangeHandler}
            />
            <button type="submit" onClick={this.handleSignup}>
              Sign Up
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
