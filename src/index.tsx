import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer as HotContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { store } from './store';
import { AppComponent } from './components/AppComponent';

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <HotContainer>
		<Provider store={store}>
            <Component />
		</Provider>
    </HotContainer>,
    rootEl
  );

render(AppComponent);
if (module.hot) module.hot.accept('./components/AppComponent', () => render(AppComponent));
