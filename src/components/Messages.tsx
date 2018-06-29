import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as messagesActions from "../actions/messagesActions";
import { IAction } from "../models/IAction";

interface IProps {
  messages: string[];
  dispatch: Dispatch<IAction>;
}

class MessagesBase extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { dispatch } = this.props;

    return (
      <div>
        {" "}
        <button onClick={() => dispatch(messagesActions.request())}>
          Messages
        </button>
        {this.props.messages.map(msg => <p key={msg}>{msg}</p>)}
      </div>
    );
  }
}

export const Messages = connect((state: IState) => ({
  messages: state.messages
}))(MessagesBase);
