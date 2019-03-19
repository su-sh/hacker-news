import axios from 'axios';

/**
 *
 *
 * @param {object} object
 */
export const signup = object => {
  const user = {
    username: object.username,
    password: object.password
  };

  axios
    .post('http://localhost:5000/signup', user)
    .then(res => {
      if (res.status === 200) {
        alert('signup sucessful');
      }
    })
    .catch(err => {
      if (err.response.status === 409) {
        alert('username already exists');
      } else {
        alert('signup error occured');
      }
    });
};

/**
 *
 *
 * @param {object} object
 * @returns {boolean}
 */
export const login = async object => {
  // const username = localStorage.getItem('username');
  // const password = localStorage.getItem('password');

  const user = {
    username: object.username,
    password: object.password
  };

  if (user.username && user.password) {
    localStorage.clear();

    return axios.post('http://localhost:5000/session/login', user);
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
