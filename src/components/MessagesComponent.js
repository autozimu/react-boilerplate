import React from 'react';
import {connect} from 'react-redux';
import * as messagesActions from '../actions/messagesActions';


@connect(state => ({
	messages: state.messages,
}))
export class MessagesComponent extends React.Component {
	static propTypes = {
		messages: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { dispatch } = this.props;

		return (
			<div>
				<button onClick={() => dispatch(messagesActions.request())}>
					Messages
				</button>
				{this.props.messages.map(msg => (
					<p key={msg}>
						{msg}
					</p>)
				)}
			</div>
		);
	}
}
