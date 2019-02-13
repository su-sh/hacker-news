import axios from 'axios';
import { BASE_URL, STORY_TYPE, STORY_TYPE_URL } from '../constants/api';

/**
 *
 * @param {string} storyType
 * @returns {string}
 */
const getStoriesUrl = storyType => {
  switch (storyType) {
    case STORY_TYPE.TOP_STORIES:
      return BASE_URL + STORY_TYPE_URL.TOP_STORIES;
    case STORY_TYPE.BEST_STORIES:
      return BASE_URL + STORY_TYPE_URL.BEST_STORIES;
    case STORY_TYPE.ASK_STORIES:
      return BASE_URL + STORY_TYPE_URL.ASK_STORIES;
    case STORY_TYPE.JOB_STORIES:
      return BASE_URL + STORY_TYPE_URL.JOB_STORIES;
    default:
      return BASE_URL + STORY_TYPE_URL.TOP_STORIES;
  }
};

/**
 *
 * @param {*} storiesType
 * @returns {object}
 */
export const fetchStoriesIndexArray = storiesType => {
  return axios.get(getStoriesUrl(storiesType));
};

/**
 *
 * @param {string} id
 * @returns {promise}
 */
export const fetchItem = id => {
  return axios.get(getItemUrl(id));
};

/**
 *
 *
 * @param {*} id
 * @returns {object}
 */
export const fetchItemNew = id => {
  return axios.get(getItemUrl(id));
};

/**
 *
 * @param {string} itemId
 * @returns {string}
 */
const getItemUrl = itemId => {
  return `${BASE_URL}/item/${itemId}.json`;
};

/**
 *
 * @returns {object}
 */
export const fetchBookmarks = () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: 'bearer ' + token }
  };

  return axios.get('http://localhost:5000/bookmark', config);
};

/**
 * @param {string} storyid
 * @returns {object}
 */
export const saveBookmark = storyid => {
  const data = {
    storyid: storyid
  };

  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: 'bearer ' + token
    }
  };

  return axios.post('http://localhost:5000/bookmark', data, config);
};

/**
 * @param {string} storyid
 * @returns {object}
 */
export const deleteBookmark = storyid => {
  const data = {
    storyid: storyid
  };

  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: 'bearer ' + token
    }
  };

  return axios.delete(`http://localhost:5000/bookmark/${storyid}`, config);
};
