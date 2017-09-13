import * as React from 'react';
import {connect} from 'react-redux';
import * as messagesActions from '../actions/messagesActions';

type Props = {
    messages: Array<string>;
    dispatch: any;
}

class MessagesComponentBase extends React.Component<Props, {}> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		const { dispatch } = this.props;

		return (
			<div> <button onClick={() => dispatch(messagesActions.request())}>
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

export const MessagesComponent = connect(state => ({
    messages: state.messages,
}))(MessagesComponentBase);
