import React, { Component } from 'react';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Form from '../routes/form';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/professional_directory/" />
					<Form path="/professional_directory/form-fill/" />
					<Profile path="profile/" user="me" />
					<Profile path="profile/:user" />
				</Router>
			</div>
		);
	}
}
