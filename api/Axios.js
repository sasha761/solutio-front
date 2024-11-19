import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wp.solutioagency.com/wp-json/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;