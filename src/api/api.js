import axios from 'axios';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

/**
 *
 * @param {string} storyType
 * @returns {string}
 */
const getStoriesUrl = storyType => {
  return `${BASE_URL}${storyType}.json`;
};

/**
 *
 * @param {string} itemId
 * @returns {string}
 */
const getItemUrl = itemId => {
  return `${BASE_URL}${itemId}.json`;
};

/**
 *
 * @param {*} storiesType
 * @returns {object}
 */
export const getStoriesIndexArray = storiesType => {
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
    .get(`${BASE_URL}item/${id}.json`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

export const STORY_TYPE = {
  TOP_STORIES: 'topstories',
  NEW_STORIES: 'newstories',
  ASK_STORIES: 'askstories',
  JOB_STORIES: 'jobstories',
  BEST_STORIES: 'beststories',
  SHOW_STORIES: 'showstories'
};
export default {
  COMMENTS: '/item',
  NEWSTORIES: '/newstories.json',
  TOPSTORIES: '/topstories.json',
  BESTSTORIES: '/beststories.json'
};
