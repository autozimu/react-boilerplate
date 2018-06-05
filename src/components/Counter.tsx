import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import * as counterActions from "../actions/counterActions";
import { IDispatch } from "../models/types";

interface IProps {
  counter: number;
  dispatch: IDispatch;
}

class CounterBase extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { dispatch } = this.props;

    return (
      <div>
        <h2>Counter: {this.props.counter}</h2>
        <Button onClick={() => dispatch(counterActions.decrement())}>--</Button>
        <Button onClick={() => dispatch(counterActions.increment())}>++</Button>
      </div>
    );
  }
}

export const Counter = connect((state: IState) => ({
  counter: state.counter
}))(CounterBase);
