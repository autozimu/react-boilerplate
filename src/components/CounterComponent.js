import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counterActions';
import {Button} from 'semantic-ui-react';

@connect(state => ({
	counter: state.counter,
}))
export class CounterComponent extends Component {
	static propTypes = {
		counter: PropTypes.number.isRequired,
	};

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
                <Button
                    onClick={() => dispatch(counterActions.decrement())}>
					--
				</Button>
                <Button
                    onClick={() => dispatch(counterActions.increment())}>
					++
				</Button>
			</div>
		);
	}
}
