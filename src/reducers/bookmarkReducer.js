import { FETCH_BOOKMARKS, NEW_BOOKMARKS } from '../actions/types';

const inititalState = {
  bookmarks: [],
  bookmark: {}
};

/**
 *
 * @param {*} state
 * @param {*} action
 * @returns {object}
 */
export default function(state = inititalState, action) {
  switch (action.type) {
    case FETCH_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload
      };

    case NEW_BOOKMARKS:
      console.log('New Bookmarks Reducer');

      return {
        ...state,
        bookmark: action.payload
      };

    default:
      return state;
  }
}
