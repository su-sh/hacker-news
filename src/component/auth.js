/**
 *
 *
 * @param {object} object
 * @returns {boolean}
 */
export const signup = object => {
  console.log('hi');

  if (true) {
    localStorage.setItem('username', object.username);
    localStorage.setItem('password', object.password);
    alert('signup sucessful');

    return true;
  } else {
    return false;
  }
};

/**
 *
 *
 * @param {object} object
 * @returns {boolean}
 */
export const login = object => {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  if (username && password) {
    if (username === object.username && password === object.password) {
      localStorage.setItem('token', true);

      alert('login sucessful');

      return true;
    } else {
      alert('login unsucessful');

      return false;
    }
  }
};

/**
 *
 *
 */
export const logout = () => {
  localStorage.removeItem('token');
  // localStorage.clear();
};
