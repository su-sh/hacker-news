import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { saveBookmarkAction } from '../../actions/bookmarkActions';

import ROUTES from '../../constants/routes';
/**
 *
 *
 * @param {object} Component
 * @returns {object}
 */
export const withBookmarksData = Component => {
  /**
   *
   *
   * @class App
   * @extends {Component}
   */
  class App extends Component {

    componentDidMount = () => {
      const getToken = localStorage.getItem('token');

      if (!getToken) {
        this.props.history.replace({ pathname: ROUTES.LOGIN });
      }
    };

    /**
     *
     *
     * @returns {object}
     */
    render() {
      return <Component {...this.props} {...this.state} />;
    }

  }

  /**
   *
   * @param {object} state
   * @returns {object}
   */
  const mapStateToProps = state => ({
    bookmarks: state.bookmarks.bookmarks
  });

  return withRouter(
    connect(
      mapStateToProps,
      { saveBookmarkAction }
    )(App)
  );
};
