import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SideNavContainer = styled.div`
	z-index: 5;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	/* width changed inline with props */
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #111;
	overflow-x: hidden;
	padding-top: 60px;
	transition: 500ms;
	a {
		font-family: 'neuzeit-grotesk', 'sans-serif';
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		text-align: center;
		font-size: 25px;
		font-weight: 700;
		letter-spacing: 4px;
		color: #ffffff;
		display: block;
		transition: 0.3s;
	}
`;

const CloseBtn = styled.p`
	position: absolute;
	display: block;
	top: -50px;
	right: 25px;
	font-size: 58px;
	margin-left: 50px;
	cursor: pointer;
	color: white;
`;

class SideNav extends React.Component {
	render() {
		return(
			<SideNavContainer style={{width: this.props.open ? '100%' : '0px'}}>
				<CloseBtn onClick={this.props.action} >&times;</CloseBtn>
				<div>
					<Link to="/">HOME</Link>
					<Link to="/events/">EVENTS</Link>
					<Link to="/churches/">CHURCHES</Link>
					<Link to="/about/">ABOUT</Link>
					<a href="http://socalnetwork.org/resources/">RESOURCES</a>
					<Link className="summit-link-mobile" to="/annual-leadership-summit/">SUMMIT</Link>
				</div>
			</SideNavContainer>
		);
	}
}

export default SideNav;
