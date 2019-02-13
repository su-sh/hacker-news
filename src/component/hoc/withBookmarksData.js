import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  saveBookmarkAction,
  removeBookmarkAction
} from '../../actions/bookmarkActions';

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
   * @augments {Component}
   */
  class App extends Component {

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
      { saveBookmarkAction, removeBookmarkAction }
    )(App)
  );
};
