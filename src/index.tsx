import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer as HotContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { AppComponent } from './components/AppComponent';
import { store } from './store';

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

declare var module: any;
if (module.hot) {
    module.hot.accept('./components/AppComponent', () => render(AppComponent));
}
