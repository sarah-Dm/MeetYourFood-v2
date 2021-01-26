import axios from 'axios';

const service = axios.create({
  baseURL: `${process.env.REACT_APP_APIURL || ''}`,
  withCredentials: true,
});

// const errorHandler = (err) => {
//   throw err;
// };

export default service;
