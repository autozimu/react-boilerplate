//@flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counterActions';
import {Button} from 'semantic-ui-react';

type Props = {
    counter: number,
    dispatch: Dispatch,
};

class CounterComponentBase extends Component<Props> {
	static propTypes = {
		counter: PropTypes.number.isRequired,
	};

	constructor(props: Props) {
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

export const CounterComponent = connect(state => ({
    counter: state.counter,
}))(CounterComponentBase);
