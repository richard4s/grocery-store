const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://grocery-store-api.herokuapp.com/api/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default instance;