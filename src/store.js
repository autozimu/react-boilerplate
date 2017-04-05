import { createStore } from 'redux';

import { reducer } from './reducers/index';


const reduxDevTools = window['__REDUX_DEVTOOLS_EXTENSION__'];

export const store = createStore(
	reducer,
	{},
	reduxDevTools && reduxDevTools(),
);

export const dispatch = store.dispatch;
