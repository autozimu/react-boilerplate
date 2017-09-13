import {Action} from '../models/Action';

export function request() {
    return dispatch  => {
		fetch('http://arch:8080/messages')
			.then(response => response.json())
			.then(messages => dispatch(set(messages)))
			.catch(err => console.error(err));
	};
}

export const SET = 'MESSAGES_SET';
export function set(messages: Array<string>): Action {
	return {
		type: SET,
		payload: messages,
	};
}
