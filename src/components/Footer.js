import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="left-foot">
						<div className="footbox social-contact">
							<h4>Connect with us on Facebook!</h4>
							<iframe className="footbox facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsocalregion1%2F&tabs=timeline&width=425&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="425" height="550" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
						</div>
					</div>

					<div className="right-foot">
						<nav className="footbox foot-menu">
							<a href="pages/events.html">EVENTS</a>
							<a href="pages/churches.html">CHURCHES</a>
							<a href="pages/about.html">ABOUT</a>
							<a href="http://socalnetwork.org/resources/">RESOURCES</a>
						</nav>

						<address className="footbox">
							<h4>Questions or comments?<br />
									Contact us here!</h4>
							<p>Phone: <a href="tel:1-805-624-0389">(805) 624-0389</a><br />
								 Email: <a href="mailto:socalregion1@gmail.com">socalregion1@gmail.com</a></p>
						</address>

						<div className="footbox logo-container">
							<img className="foot-logo" src="images/brand/socal.png" alt="socal region 1 logo" />
							<img className="foot-logo" src="images/brand/region1-logo.png" alt="socal region 1 logo" />
						</div>

						<p className="copyright">&copy;Copyright SoCal Network Region 1 2017<br />	- All rights reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
