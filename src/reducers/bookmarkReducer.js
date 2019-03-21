import {
  FETCH_BOOKMARKS,
  REMOVE_BOOKMARK,
  GET_BOOKMARKS,
  SAVE_BOOKMARK
} from '../actions/types';

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

    case SAVE_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };

    case GET_BOOKMARKS:
      return {
        ...state
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          bookmark => bookmark.storyid !== action.payload
        )
      };

    default:
      return state;
  }
}
