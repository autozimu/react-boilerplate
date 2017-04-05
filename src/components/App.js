import React, { Component } from 'react';
import { Counter } from './Counter';
import { Messages } from './Messages';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export class App extends Component {
  render() {
    return (
		<div>
			<Counter />
			<Messages />
		</div>
    );
  }
}
