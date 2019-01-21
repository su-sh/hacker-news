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
export const getStoriesIndexNew = storiesType => {
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
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
};
