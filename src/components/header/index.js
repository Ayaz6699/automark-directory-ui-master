import React  from 'react';
import './style.css';

const Header = (props) => (
	<div className="td-header-wrap td-header-style-5 ">
		<div className="td-header-top-menu-full td-container-wrap ">
			<div className="td-container td-header-row td-header-top-menu">
				<div className="top-bar-style-1">
					<div className="td-header-sp-top-menu">
						<div className="td-weather-top-widget" id="td_top_weather_uid">
							<div className="td-weather-now" data-block-uid="td_top_weather_uid">
								<span className="td-big-degrees">32</span>
								<span className="td-weather-unit">C</span>
							</div>
							<div className="td-weather-header">
								<div className="td-weather-city">Karachi,Pakstan</div>
							</div>
						</div>
						<div className="td_data_time">
							<div>
								Friday, June 15, 2018
</div>
						</div>
						<div className="menu-top-container"><ul id="menu-top-menu" className="top-header-menu sf-js-enabled"><li id="menu-item-868" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-first td-menu-item td-normal-menu menu-item-868"><a href="https://www.automark.pk/forums/">Forums</a></li>
							<li id="menu-item-885" className="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-885"><a href="https://www.automark.pk/subscription-form/">Subscription Form</a></li>
							<li id="menu-item-1874" className="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-1874"><a href="https://www.automark.pk/contact-us/">Contact Us</a></li>
						</ul></div></div>
					</div>

			</div>
		</div>
		<div className="td-header-menu-wrap-full td-container-wrap " style={{height: "180px"}}>
			<div className="td-header-menu-wrap ">
				<div className="td-container td-header-row td-header-main-menu black-menu">
					<div id="td-header-menu" role="navigation">
						<div className="td-main-menu-logo td-logo-in-menu td-logo-sticky">
							<a className="td-mobile-logo td-sticky-header" href="https://www.automark.pk/">
								<img src="https://www.automark.pk/wp-content/uploads/2018/02/Automark_New_logo_mobile.jpg" alt="Automark Magazine " title="Automark Magazine " scale="0" />
</a>
								<h1 className="td-logo"> <a className="td-header-logo td-sticky-header" href="https://www.automark.pk/">
									<img src="https://www.automark.pk/wp-content/uploads/2018/02/Automark_New_logo.jpg" alt="Automark Magazine " title="Automark Magazine " scale="0" />
										<span className="td-visual-hidden">Automark</span>
</a>
</h1> </div>
								<div className="menu-main-menu-container"><ul id="menu-main-menu-1" className="sf-menu sf-js-enabled"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-551 current_page_item menu-item-first td-menu-item td-normal-menu menu-item-2751"><a href="https://www.automark.pk/">Home</a></li>
									<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children td-menu-item td-normal-menu menu-item-992"><a href="/news" className="sf-with-ul">News</a>
										<ul className="sub-menu" style={{float: "none", width: "13.0714em", display: "none"}}>
											<li className="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-892" 
											style={{whiteSpace: "normal", float: "left", width: "100%"}}>
											<a href="https://www.automark.pk/category/industry-news/" style={{float: "none", width: "auto"}}>Industry News</a></li>
											<li className="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-893" style={{whiteSpace: "normal", float: "left", width: "100%"}}><a href="https://www.automark.pk/category/automotive-articles/" style={{float: "none", width: "auto"}}>Automotive Articles</a></li>
										</ul>
									</li>
									<li className="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-916"><a href="https://www.automark.pk/subscription-form/">Subscription Form</a></li>
									<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children td-menu-item td-normal-menu menu-item-991"><a href="http://www.automark.pk/company_profile/" className="sf-with-ul">Company Profiles</a>
										<ul className="sub-menu" style={{float: "none", width: "12.7857em", display: "none"}}>
											<li className="menu-item menu-item-type-taxonomy menu-item-object-company_type td-menu-item td-normal-menu menu-item-1213" style={{whiteSpace: "normal", float: "left", width: "100%"}}><a href="https://www.automark.pk/company_type/bike-manufacturer/" style={{float: "none", width: "auto"}}>Bike Manufacturer</a></li>
											<li className="menu-item menu-item-type-taxonomy menu-item-object-company_type td-menu-item td-normal-menu menu-item-1350" style={{whiteSpace: "normal", float: "left", width: "100%"}}><a href="https://www.automark.pk/company_type/cars-manufacturer/" style={{float: "none", width: "auto"}}>Cars Manufacturer</a></li>
										</ul>
									</li>
									<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children td-menu-item td-normal-menu menu-item-1312"><a href="/pricelist" className="sf-with-ul">Price List</a>
										<ul className="sub-menu" style={{float: "none", width: "12.2857em", display: "none"}}>
											<li className="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-932" style={{whiteSpace: "normal", float: "left", width: "100%"}}><a title="motorcycle prices" href="http://www.automark.pk/motorcycle/" style={{float: "none", width: "auto"}}>Motorcycle Prices</a></li>
											<li className="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-1313" style={{whiteSpace: "normal", float: "left", width: "100%"}}><a href="http://www.automark.pk/car/" style={{float: "none", width: "auto"}}>Car Prices</a></li>
										</ul>
									</li>
									<li className="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-1965"><a href="https://www.automark.pk/category/chinese-bike/">Chinese Bike</a></li>
									<li className="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-2746"><a href="https://www.automark.pk/category/automotive-articles/">Automotive Articles</a></li>
									<li className="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-2747"><a href="https://www.automark.pk/category/industry-news/">Industry News</a></li>
									<li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children td-menu-item td-normal-menu menu-item-2748"><a href="https://www.automark.pk/category/magazine-2/" className="sf-with-ul">Magazine</a>
										<ul className="sub-menu" style={{float: "none", width: "10em", display: "none"}}>
											<li className="menu-item menu-item-type-taxonomy menu-item-object-category td-menu-item td-normal-menu menu-item-967" style={{whiteSpace: "normal", float: "left", width: "100%"}}><a href="https://www.automark.pk/category/magazine-2/" style={{float: "none", width: "auto"}}>Magazine</a></li>
										</ul>
									</li>
									<li className="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-2749">
									<a href="https://www.automark.pk/linkbook/">Automark Directory Form</a></li>
									<li className="menu-item menu-item-type-custom menu-item-object-custom td-menu-item td-normal-menu menu-item-2795">
									<a title="Events" href="http://www.automark.pk/events/event">Events</a></li>
									<li className="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-2946">
									<a href="https://www.automark.pk/advertisement-package-price-automark-pk/">Advertisement Package and Price on Automark.pk</a></li>
								</ul></div></div>
							<div className="header-search-wrap">
								<div className="td-drop-down-search" aria-labelledby="td-header-search-button">
									<form method="get" className="td-search-form" action="https://www.automark.pk/">
										<div role="search" className="td-head-form-search-wrap">
											<input id="td-header-search" type="text" value="" name="s" autoComplete="off" />
											<input className="wpb_button wpb_btn-inverse btn" type="submit" id="td-header-search-top" value="Search" />
										</div>
											</form>
											<div id="td-aj-search"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					);
export default Header;