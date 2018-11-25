import React from 'react';
import styled from 'styled-components';

class SideNav extends React.Component {
	render() {
		return(
			<div id="mySidenav" className="sidenav">
				<a href="javascript:void(0)" id="closeButton" className="closebtn">&times;</a>
				<a href="index.html">HOME</a>
				<a href="pages/events.html">EVENTS</a>
				<a href="pages/churches.html">CHURCHES</a>
				<a href="pages/about.html">ABOUT</a>
				<a href="http://socalnetwork.org/resources/">RESOURCES</a>
				<a className="summit-link-mobile" href="annual-leadership-summit.html">SUMMIT</a>
			</div>
		);
	}
}

export default SideNav;
