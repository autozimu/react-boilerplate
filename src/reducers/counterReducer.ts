import * as counterActions from '../actions/counterActions';
import {Action} from '../models/Action';

type State = number;

const handlers = {};

export function counterReducer(state: State = 0, action: Action): State {
	if (handlers[action.type]) {
		return handlers[action.type](state, action.payload);
	}

	return state;
}

handlers[counterActions.INCREMENT] = function(state: State): State {
	return state + 1;
};

handlers[counterActions.DECREMENT] = function(state: State): State {
	return state - 1;
};
