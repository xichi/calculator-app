import axios from 'axios';

const request = axios.create({
  baseURL: 'https://www.mycurrency.net',
});

export function getExchangeRate() {
  return request.get('/US.json');
}
