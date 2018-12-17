import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { checkPropTypes } from 'prop-types';

const NavbarContainer = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${props => props.transparentBG ? 'rgba(0,0,0,0)' : '#181818'};
	margin: 0;
	padding: 0;
	width: 100%;
	@media (max-width: 724px) {
		flex-direction: row;
		justify-content: space-around;
		height: 75px;
		width: 100%;
	}
	@media (min-width: 725px) {
		height: 100px;
	}
	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-around;
	}
`;

const NavLogo = styled.img`
	height: 100px;
	width: auto;
	margin: 0;
	padding: 0;
	@media (max-width: 724px) {
		padding-left: 8%;
    height: 70px;
    width: auto;
	}
	@media (min-width: 725px) {
		height: 90px;
	}
`;

const LeftNav = styled.div`
	@media (max-width: 724px) {
		display: flex;
		width: 50%;
		height: 75px;
	}
`;

const RightNav = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 100px;
	width: 50%;
	margin: 0;
	padding: 18px 0;
	a {
		font-family: 'neuzeit-grotesk', 'sans-serif';
		float: right;
		display: block;
		color: white;
		text-decoration: none;
		font-size: 0.85em;
		font-weight: 700;
		letter-spacing: 3px;
		border: 1px solid white;
		padding: 14px;
		margin: 5px;
		&:hover {
			background-color: #5E9EA2;
			transition: 350ms;
		}
	}
	.summitLinkDesk {
		background-color: #5E9EA2;
		&:hover {
			background-color: black;
		}
	}
	@media (max-width: 724px) {
		display: flex;
		width: 100px;
		height: 75px;
		padding: 0;
		margin: 0;
		a {
			display: none;
		}
	}
	@media (min-width: 725px) {
		width: auto;
	}
	@media (min-width: 1024px) {
		font-size: 1.3em;
		padding: 22px;
	}
`;

const MobileMenuButton = styled.img`
	@media (max-width: 724px) {
		display: inline;
		height: 35px;
		width: auto;
		margin: auto;
		padding: 5px;
		&:hover {
			cursor: pointer;
		}
	}
	@media (min-width: 725px) {
		display: none;
	}
`;

class Navbar extends React.Component {
	render() {
		return (
			<NavbarContainer id="fullNav" transparentBG={this.props.transparentBG} >
					<LeftNav>
						<Link to="."><NavLogo src={require("../images/SoCal.png")} /></Link>
					</LeftNav>
					<RightNav>
						<Link to="/events">EVENTS</Link>
						<Link to="/churches">CHURCHES</Link>
						<Link to="/about">ABOUT</Link>
						<a href="http://socalnetwork.org/resources/">RESOURCES</a>
						<Link to="/summit" className="summitLinkDesk" >SUMMIT</Link>
						<MobileMenuButton onClick={this.props.action} src={require("../images/menu-button.svg")} alt="menu icon" />
					</RightNav>
			</NavbarContainer>
		);
	}
}

export default Navbar;
