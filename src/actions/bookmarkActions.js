import { FETCH_BOOKMARKS, SAVE_BOOKMARK, REMOVE_BOOKMARK } from './types';
import { fetchBookmarks, saveBookmark } from '../api/api';

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
  console.log(storyid);

  saveBookmark(storyid).then(res => {
    // console.log('asdfasdf ', res.data.bookmark);

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
  dispatch({
    type: REMOVE_BOOKMARK,
    payload: storyid
  });
};
