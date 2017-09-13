import * as messagesActions from '../actions/messagesActions';
import {Action} from '../models/Action';

type State = Array<string>;

const handlers = {};

export function messagesReducer(state: State = [], action: Action): State {
	if (handlers[action.type]) {
		return handlers[action.type](state, action.payload);
	}

	return state;
}

handlers[messagesActions.SET] = function(state: State, message: State): State {
	return message;
};
