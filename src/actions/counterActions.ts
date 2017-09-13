import {Action} from '../models/Action';

export const INCREMENT = 'COUNTER_INCREMENT';
export function increment(): Action {
	return {
		type: INCREMENT,
		payload: {}
	};
}

export const DECREMENT = 'COUNTER_DECREMENT';
export function decrement(): Action {
	return {
		type: DECREMENT,
		payload: {}
	};
}
