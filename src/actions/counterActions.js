//@flow

export const INCREMENT = 'COUNTER_INCREMENT';
export function increment() {
	return {
		type: INCREMENT,
		payload: {}
	};
}

export const DECREMENT = 'COUNTER_DECREMENT';
export function decrement() {
	return {
		type: DECREMENT,
		payload: {}
	};
}
