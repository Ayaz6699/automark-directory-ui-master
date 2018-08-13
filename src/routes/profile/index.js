import React, { Component } from 'react';
import style from './style.css';

export default class Profile extends Component {
	state = {
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
	}


	// Note: `user` comes from the URL, courtesy of our router
	render() {
		return (
			<div>
				Profile
			</div>
		);
	}
}
