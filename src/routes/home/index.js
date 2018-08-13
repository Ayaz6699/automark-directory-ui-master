import React, { Component } from 'react';
import Footer from '../../components/footer/index';
import './style.css';

export default class Home extends Component {
	render() {
		return <div>
			<main role="main">
				<section className={`jumbotron text-center brownbg`}>
					<div className="container">
						<h1 className="jumbotron-heading">Automark Professional Directory</h1>
						<p className="lead text-muted">
							Create your profile by clicking on the button and filling the form
						</p>
						<p>
							<a href="?a=1#form-fill" className={`lead my-2 btn-grad red-hover`}>
								Create profile
							</a>
						</p>
					</div>
				</section>

			</main>
			<Footer />
		</div>
	}
}
