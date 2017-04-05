import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { store } from './store';
import { App } from './components/App';

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
		<Provider store={store}>
			<Component />
		</Provider>
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./components/App', () => render(App));
