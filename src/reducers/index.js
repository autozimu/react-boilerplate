import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

export const reducer = combineReducers({
	counter: counterReducer,
});
