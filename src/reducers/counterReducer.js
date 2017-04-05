import * as counterActions from '../actions/counterActions';

const handlers = {};

export function counterReducer(state = 0, action) {
	if (handlers[action.type]) {
		return handlers[action.type](state, action.payload);
	}

	return state;
}

handlers[counterActions.INCREMENT] = (state) => {
	return state + 1;
};

handlers[counterActions.DECREMENT] = (state) => {
	return state - 1;
};
