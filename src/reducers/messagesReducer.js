import * as messagesActions from '../actions/messagesActions';

const handlers = {};

export function messagesReducer(state = [], action) {
	if (handlers[action.type]) {
		return handlers[action.type](state, action.payload);
	}

	return state;
}

handlers[messagesActions.SET] = (state, message) => {
	return message;
};
