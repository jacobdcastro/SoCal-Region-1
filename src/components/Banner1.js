import React from 'react';
import styled from 'styled-components';

class Banner1 extends React.Component {
	render() {
		return (
			<div className="banner2">
				<h2 className="events banner">EVENTS</h2>
				<div className="banner-content">
					<p>Find out more about<br />
						 events happening<br />
						 throughout Region 1</p>
					<a href="pages/events.html"><h5 className="banner-buttons">See Events</h5></a>
				</div>
			</div>
		);
	}
}

export default Banner1;
