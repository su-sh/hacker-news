import { FETCH_BOOKMARKS } from './types';
import { fetchBookmarks } from '../api/api';

/**
 *
 * @returns {object}
 */
export const fetchBookmarksAction = () => dispatch => {
  console.log('fetch bookmarks');

  fetchBookmarks().then(res=>{
    console.log('fetchBookmarks', res);
  })

  fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(bookmarks =>
      dispatch({
        type: FETCH_BOOKMARKS,
        payload: bookmarks
      })
    );
};
