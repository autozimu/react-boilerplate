import * as React from 'react';
import { connect } from 'react-redux';
import {Button} from 'semantic-ui-react';
import * as counterActions from '../actions/counterActions';

interface IProps {
    counter: number;
    dispatch: any;
};

class CounterComponentBase extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
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
}))(CounterComponentBase) as React.ComponentClass<{}>;
