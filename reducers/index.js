import {combineReducers} from 'redux';
import HeaderReducer from './reducer-header'

const allReducers = combineReducers({
  HeaderReducer : HeaderReducer
});

export default allReducers;
