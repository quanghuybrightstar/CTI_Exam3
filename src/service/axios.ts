import axios from 'axios';
import { API_URL } from '@/src/constants';

const $axios = axios.create({
  baseURL: API_URL,
});

export default $axios;
