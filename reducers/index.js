import {combineReducers} from 'redux';
import HeaderReducer from './reducer-header'
import Results from './reducer-results'
const allReducers = combineReducers({
  HeaderReducer : HeaderReducer,
  ResultReducer : Results
});

export default allReducers;
