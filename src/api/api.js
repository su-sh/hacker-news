import axios from 'axios';

/**
 *
 *
 * @param {*} storiesType
 */
export const getStoriesIndex = storiesType => {
  return axios.get(`https://hacker-news.firebaseio.com/v0/${storiesType}.json`);
};
