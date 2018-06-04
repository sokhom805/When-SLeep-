import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Home from './Home';
import Layout from './layout.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider>
	    <Router history={ browserHistory }>
		  <div>
		  	<Route exact path = "/" component={ Home} />
		  	<Route exact path = "/layout" component={ Layout } />
		  	
	      </div>
		</Router>
	</Provider>
	,document.getElementById('root'));
registerServiceWorker();

