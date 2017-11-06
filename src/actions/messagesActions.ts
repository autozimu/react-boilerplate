import {Action} from '../models/Action';

export function request() {
    return dispatch  => {
		fetch('http://arch:8080/messages')
			.then(response => response.json())
			.then(messages => dispatch(set(messages)))
			.catch(err => console.error(err));
	};
}

export enum ActionTypes {
    Set = 'MESSAGES_SET',
}

export function set(messages: Array<string>): Action {
	return {
		type: ActionTypes.Set,
		payload: messages,
	};
}
