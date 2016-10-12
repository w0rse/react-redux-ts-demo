import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

// import { store } from './store';

import App from './App';

const styles = require('./styles/global');

// <Provider store={ store }>
// </Provider>

const rootEl = document.getElementById('root');

render((
	<AppContainer>
		<App />
	</AppContainer>
), rootEl);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>
		, rootEl);
	});
}
