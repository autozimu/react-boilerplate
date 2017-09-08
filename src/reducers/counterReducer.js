// @flow
import * as counterActions from '../actions/counterActions';

const handlers = {};

export function counterReducer(state: number = 0, action: Action): number {
	if (handlers[action.type]) {
		return handlers[action.type](state, action.payload);
	}

	return state;
}

handlers[counterActions.INCREMENT] = (state) => {
	return 'nb';
};

handlers[counterActions.DECREMENT] = (state) => {
	return state - 1;
};
