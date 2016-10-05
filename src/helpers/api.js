import axios from 'axios';
import moment from 'moment';
import { QUANDL_API_KEY } from './secret';

export const fetchData = stock => {
  const today = moment(new Date());
  const endDate = today.clone().format('YYYY-MM-DD');
  const startDate = today.clone().subtract(1, 'year').format('YYYY-MM-DD');
  return axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?column_index=4&start_date=${startDate}&end_date=${endDate}&api_key=${QUANDL_API_KEY}`);
}