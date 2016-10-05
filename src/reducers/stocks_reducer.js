import _ from 'lodash';
import {
  FETCH_STOCKS,
  CREATE_STOCK,
  DELETE_STOCK
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_STOCKS:
      return action.payload;
    case CREATE_STOCK:
      return { ...state, ...action.payload };
    case DELETE_STOCK:
      return _.omit(state, action.payload);
      default:
      return state;
  }
}
