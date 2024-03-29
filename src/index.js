import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';
import { Provider } from 'react-redux';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const Wrapper = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
