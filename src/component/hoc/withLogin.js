import React from 'react';

/**
 * @param {object} Component
 * @returns {object}
 */
export const withLogin = Component => {
  return class App extends Component {
    componentWillMount = () => {
      const getToken = localStorage.getItem('token');

      if (getToken) {
        this.props.history.replace({ pathname: '/bookmarks' });
      }
    };

    /**
     * @returns {object}
     */
    render() {
      return <Component {...this.props} />;
    }
  };
};
