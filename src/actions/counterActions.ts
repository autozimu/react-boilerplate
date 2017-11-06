import {Action} from '../models/Action';

export enum ActionTypes {
    Increment = 'COUNTER_INCREMENT',
    Decrement = 'COUNTER_DECREMENT',
};

export function increment(): Action {
	return {
		type: ActionTypes.Increment,
		payload: {}
	};
}

export function decrement(): Action {
	return {
		type: ActionTypes.Decrement,
		payload: {}
	};
}
