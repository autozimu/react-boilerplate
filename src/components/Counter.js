import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counterActions';

@connect(state => ({
	counter: state.counter,
}))
export class Counter extends Component {
	static propTypes = {
		counter: PropTypes.number.isRequired,
	};

	state = {};

	constructor(props) {
		super(props);
	}

	render() {
		const { dispatch } = this.props;

		return (
			<div>
				<h2>
					Counter: {this.props.counter}
				</h2>
				<button onClick={() => dispatch(counterActions.decrement())}>
					--
				</button>
				<button onClick={() => dispatch(counterActions.increment())}>
					++
				</button>
			</div>
		);
	}
}
