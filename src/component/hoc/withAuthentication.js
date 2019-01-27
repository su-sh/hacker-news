import React, { Component } from 'react';

/**
 *
 *
 * @param {object} Component
 * @returns {object}
 */
export const withAuthentication = Component => {
  return class App extends Component {

    componentWillMount = () => {
      const getToken = localStorage.getItem('token');

      if (!getToken) {
        this.props.history.replace({ pathname: '/login' });
      }
    };

    /**
     *
     *
     * @returns {object}
     */
    render() {
      return <Component {...this.props} />;
    }

  };
};
