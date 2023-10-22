import axios from 'axios';
axios.defaults.timeout = 10000;
// import NetInfo from '@react-native-community/netinfo';

// Add a request interceptor
// Do something before request is sent
// axios.interceptors.request.use(
//   async config => {
//     // Do something before request is sent
//     return config;
//   },
//   error => {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );

// Add a response interceptor
// Do something with response data
/*
axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
*/
export default axios;
