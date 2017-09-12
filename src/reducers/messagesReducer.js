//@flow
import * as messagesActions from '../actions/messagesActions';

type State = Array<string>;

const handlers = {};

export function messagesReducer(state: State = [], action: Action): State {
	if (handlers[action.type]) {
		return handlers[action.type](state, action.payload);
	}

	return state;
}

handlers[messagesActions.SET] = (state: State, message: State) => {
	return message;
};
