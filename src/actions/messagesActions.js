export function request() {
	return dispatch => {
		fetch("http://arch:8080/messages")
			.then(res => res.json())
			.then(messages => dispatch(set(messages)))
			.catch(err => console.error(err));
	};
}

export const SET = 'MESSAGES_SET';
export function set(messages) {
	return {
		type: SET,
		payload: messages,
	};
}
