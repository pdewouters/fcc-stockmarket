import { combineReducers } from 'redux';
import stocksReducer from './stocks_reducer';

const rootReducer = combineReducers({
  stocks: stocksReducer
});

export default rootReducer;