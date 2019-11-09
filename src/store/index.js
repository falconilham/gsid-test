import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import rootReducer from '../reducer/'

export function configureAppStore(preloadedState) {

	const store = configureStore({
		reducer: rootReducer,
		middleware: [...getDefaultMiddleware()],
		preloadedState,
	})

	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./../reducer', () => store.replaceReducer(rootReducer))
	}

	return store
}

const store = configureAppStore()

export {store} 