/**
 *
 *
 * @param {object} object
 */
export const signup = object => {
  console.log('hi');
  localStorage.setItem('username', object.username);
  localStorage.setItem('password', object.password);
  alert('signup sucessful');
};

/**
 *
 *
 * @param {object} object
 * @returns {object}
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
