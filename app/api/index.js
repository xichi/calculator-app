import axios from 'axios';
import { AppUrl, AppId } from '../constants';

const request = axios.create({
  baseURL: AppUrl,
});

export function getExchangeRate() {
  return request.get('/api/latest.json', {
    params: {
      app_id: AppId,
    },
  });
}
