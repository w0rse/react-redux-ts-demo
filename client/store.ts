import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

let middlewares: Redux.Middleware[] = [
	thunk,
];

if (process.env.NODE_ENV === 'development') {
	const createLogger = require('redux-logger');
	const logger = createLogger();
	middlewares.push(logger);
}

const composeEnhancers = (process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(...middlewares)
));

if ((module as any).hot) {
	(module as any).hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').rootReducer;
		store.replaceReducer(nextRootReducer);
	});
}
