import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import { store } from './store';

require('./styles/global');

const rootEl = document.getElementById('root');

// Development Mode
if (process.env.NODE_ENV === 'development') {
	const AppContainer = require('react-hot-loader').AppContainer;

	const renderApp = (AppComponent: any) => {
		ReactDOM.render(
			(
				<AppContainer>
					<Provider store={ store }>
						<AppComponent />
					</Provider>
				</AppContainer>
			),
			rootEl
		);
	};

	renderApp(App);

	// Hot Module Replacement API
	if ((module as any).hot) {
		(module as any).hot.accept('./App', () => {
			const NextApp = require('./App').App;
			renderApp(NextApp);
		});
	}

// Production Mode
} else {
	ReactDOM.render(
		(
			<Provider store={ store }>
				<App />
			</Provider>
		),
		rootEl
	);
}
