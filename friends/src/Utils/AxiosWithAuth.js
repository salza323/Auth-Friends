import axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem.apply('token');
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: 'http://localstorage:5000',
  });
};
