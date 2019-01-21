import axios from 'axios';

/**
 *
 * @returns {promise}
 * @param {*} storiesType
 */
export const getStoriesIndex = storiesType => {
  return axios.get(`https://hacker-news.firebaseio.com/v0/${storiesType}.json`);
};

/**
 *
 * @returns {object}
 * @param {*} storiesType
 */
export const getStoriesIndexArray = storiesType => {
  storiesType = 'topstories';

  return axios
    .get(`https://hacker-news.firebaseio.com/v0/${storiesType}.json`)
    .then(res => {
      return res.data;
    })
    .catch(err => {});
};

/**
 *
 * @returns {promise}
 * @param {string} id
 */
export const getItem = id => {
  console.log('id', id);

  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(res => {
      return res.data;
    })
    .catch(err => {});
};

export const STORY_TYPE = {
  TOP_STORIES: 'topstories',
  NEW_STORIES: 'newstories',
  BEST_STORIES: 'beststories',
  ASK_STORIES: 'askstories'
};
