import axios from 'axios';
axios.defaults.baseURL = 'https://job-tracker-23.onrender.com/api/v1/';
// axios.defaults.baseURL = 'http://localhost:3023/api/v1';

axios.interceptors.request.use(function (req) {
  const user = localStorage.getItem('user');

  if (user) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
