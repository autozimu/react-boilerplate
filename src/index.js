import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { store } from './store';
import { AppComponent } from './components/AppComponent';

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

render(AppComponent);
if (module.hot) module.hot.accept('./components/AppComponent', () => render(AppComponent));
