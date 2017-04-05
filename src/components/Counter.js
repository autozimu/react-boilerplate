import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counterActions';
import { dispatch } from '../store';

@connect(state => ({
	counter: state.counter,
}))
export class Counter extends Component {
	static propTypes = {
		counter: PropTypes.number,
	};

	static defaultProps = {
		counter: 0,
	};

	state = {};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>Counter: {this.props.counter}</h2>
				<button onClick={() => dispatch(counterActions.decrement())}>-</button>
				<button onClick={() => dispatch(counterActions.increment())}>+</button>
			</div>
		);
	}
}
