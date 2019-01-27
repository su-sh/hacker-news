/**
 *
 * This function return sliced array of id's according to current page number.
 *
 * @param {array} array
 * @param {number} pageSize
 * @param {number} pageNumber
 * @returns {array}
 */
export const paginate = (array, pageSize, pageNumber) => {
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
};

/**
 * This function generates elapsed relative time from obtained absolute timestamp.
 *
 * @param {*} previousTimestamp
 * @returns {string} Returns relative time.
 */
export const getTimeDifference = previousTimestamp => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const currentTimestamp = Date.now();
  const elapsed = currentTimestamp - previousTimestamp * 1000;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
  }
};

/**
 * This function generates hostname form obtained url.
 *
 * @param {*} url
 * @returns {string} Returns hostname.
 */
export const getHostname = url => {
  const l = document.createElement('a');

  l.href = url;

  return l.hostname;
};

/**
 * This function returns position of listItem on list.
 *
 * @param {number} index
 * @param {number} pageNumber
 * @returns {number}
 */
export const getPosition = (index, pageNumber) => {
  return index + 1 + pageNumber * 30;
};

/**
 * This function returns story list with limited number of item that is to be shown.
 *
 * @param {array} array Array with all elements.
 * @param {number} pageNumber Current page number.
 * @returns {array} Array with sliced elements.
 */
export const getShowStoryList = (array, pageNumber) => {
  return array.slice(pageNumber * 30, (pageNumber + 1) * 30);
};

/**
 * This function returns search url.
 *
 * @param {string} searchString
 * @returns {string}
 */
export const getSearchUrl = (searchString) => {
  return `http://www.google.com/search?q=${searchString}`;
};
