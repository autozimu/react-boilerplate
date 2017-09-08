//@flow
import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { messagesReducer } from './messagesReducer';

export const reducer = combineReducers({
	counter: counterReducer,
	messages: messagesReducer,
});
