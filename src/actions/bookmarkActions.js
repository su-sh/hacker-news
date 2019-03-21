import { FETCH_BOOKMARKS, SAVE_BOOKMARK, REMOVE_BOOKMARK } from './types';
import { fetchBookmarks, saveBookmark, deleteBookmark } from '../api/api';

/**
 *
 * @returns {object}
 */
export const fetchBookmarksAction = () => dispatch => {
  fetchBookmarks().then(res => {
    dispatch({
      type: FETCH_BOOKMARKS,
      payload: res.data.bookmarks
    });
  });
};

/**
 *
 * @param {integer} storyid
 * @returns {*}
 */
export const saveBookmarkAction = storyid => dispatch => {
  saveBookmark(storyid).then(res => {
    dispatch({
      type: SAVE_BOOKMARK,
      payload: res.data.bookmark
    });
  });
};

/**
 *
 * @param {integer} storyid
 * @returns {*}
 */
export const removeBookmarkAction = storyid => dispatch => {
  deleteBookmark(storyid).then(res => {
    dispatch({
      type: REMOVE_BOOKMARK,
      payload: storyid
    });
  });
};
