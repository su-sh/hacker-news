import axios from 'axios';
import { BASE_URL, STORY_TYPE, STORY_TYPE_URL } from '../constants/api';

/**
 *
 * @param {*} storiesType
 * @returns {object}
 */
export const fetchStoriesIndexArray = storiesType => {
  return axios
    .get(getStoriesUrl(storiesType))
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

/**
 *
 * @param {string} id
 * @returns {promise}
 */
export const fetchItem = id => {
  return axios
    .get(getItemUrl(id))
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

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
 * @param {string} itemId
 * @returns {string}
 */
const getItemUrl = itemId => {
  return `${BASE_URL}/item/${itemId}.json`;
};
