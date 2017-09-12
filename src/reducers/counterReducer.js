// @flow
import * as counterActions from '../actions/counterActions';

type State = number;

const handlers = {};

export function counterReducer(state: State = 0, action: Action): State {
	if (handlers[action.type]) {
		return handlers[action.type](state, action.payload);
	}

	return state;
}

handlers[counterActions.INCREMENT] = (state: State) => {
	return state + 1;
};

handlers[counterActions.DECREMENT] = (state: State) => {
	return state - 1;
};
