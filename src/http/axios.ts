import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://www.3d66.com',
  timeout: 50000,
  // withCredentials: true
});

export default Axios