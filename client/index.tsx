import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { store } from './store';

import { App } from './App';

require('./styles/global');

const rootEl = document.getElementById('root');

const renderApp = (AppComponent: any) => {
	ReactDOM.render(
		(
			<AppContainer>
				<Provider store={ store }>
					<AppComponent />
				</Provider>
			</AppContainer>
		),
		rootEl)
	;
};

renderApp(App);

// Hot Module Replacement API
if ((module as any).hot) {
	(module as any).hot.accept('./App', () => {
		const NextApp = require('./App').App;
		renderApp(NextApp);
	});
}
