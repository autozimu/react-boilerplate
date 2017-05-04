import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counterActions';
import RaisedButton from 'material-ui/RaisedButton';

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
                <RaisedButton
                    secondary
                    onClick={() => dispatch(counterActions.decrement())}>
					--
				</RaisedButton>
                <RaisedButton
                    primary
                    onClick={() => dispatch(counterActions.increment())}>
					++
				</RaisedButton>
			</div>
		);
	}
}
