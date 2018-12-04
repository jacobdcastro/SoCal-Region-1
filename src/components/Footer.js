import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterContainer = styled.footer`
	display: flex;
	align-content: center;
	background-color: #181818;
	color: #fff;
	padding: 15px 10%;
	margin: 0;
	@media (min-width: 724px) {
		padding: 15px 2%;
	}
`;

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px auto;
	width: 90%;
	max-width: 1100px;
	@media (min-width: 1140px) {
		justify-content: space-between;
		flex-direction: row;
	}
`;

const LeftFoot = styled.div`
	width: 100%;
`;

const SocialContact = styled.div`
	padding: 5px;
	text-align: center;
	align-self: center;
	margin: 15px;
	width: 100%;
	align-items: center;
	h4 {
		font-family: 'neuzeit-grotesk', 'sans-serif';
		font-size: 1.25em;
	}
	@media (max-width: 480px) {
		margin: 15px 0;
		text-align: center;
	}
`;

const FacebookPlugin = styled.iframe`
	align-self: center;
	height: 550px;
	margin: 12px auto 0;
	@media (max-width: 480px) {
		margin-bottom: 0px;
	}
`;

const RightFoot = styled.div`
  flex-direction: column;
  @media (max-width: 480px) {
	  text-align: center;
  }
`;

const FootMenu = styled.nav`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	margin: 15px;
	padding: 5px;
	a {
		font-family: 'neuzeit-grotesk', 'sans-serif';
		background-color: #BCBEC0;
		margin: 7px;
		padding: 7px 7px 0px 10px;
		text-decoration: none;
		color: white;
		letter-spacing: 3px;
		font-weight: 700;
		border-radius: 22px;
		height: 28px;
	}
	@media (max-width: 480px) {
		flex-direction: column;
		a {
			width: 90%;
			margin: 0 auto 35px;
			height: 32px;
			background-color: none;
			text-align: center;
		}
	}
	@media(min-width: 724px) {
		align-items: center;
	}
`;

const FootBox = styled.address`
	margin: 15px;
	padding: 5px;
	h4 {
		font-family: 'neuzeit-grotesk', 'sans-serif';
		margin: 0;
		padding-bottom: 4px;
		letter-spacing: 1.5px;
	}
	p {
		font-family: 'neuzeit-grotesk', 'sans-serif';
		margin: 0;
		padding-bottom: 4px;
		letter-spacing: 1.5px;
	}
	a {
		color: white;
	}
	@media (max-width: 480px) {
		align-items: center;
	}
	@media(min-width: 724px) {
		align-items: center;
	}
`;

const FootLogos = styled.div`
	margin: 15px;
	flex-wrap: no-wrap;
	@media (max-width: 480px) {
		img {
			height: 150px;
			width: auto;
		}
	}
	@media (min-width: 724px) {
		align-items: center;
		img {
			height: 150px;
			width: auto;
		}
	}
`;

const Copyright = styled.p`
	font-family: 'neuzeit-grotesk', 'sans-serif';
	font-size: .89em;
	font-weight: 400;
	letter-spacing: 1px;
`;

const imgStyles = {
	height: '130px',
	width: 'auto',
	margin: '0px'
};

class Footer extends React.Component {
	render() {
		return (
			<FooterContainer>
				<FooterContent>
					<LeftFoot>
						<SocialContact>
							<h4>Connect with us on Facebook!</h4>
							<FacebookPlugin src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsocalregion1%2F&tabs=timeline&width=425&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="425" height="550" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true"></FacebookPlugin>
						</SocialContact>
					</LeftFoot>

					<RightFoot>
						<FootMenu>
							<Link to="/events/">EVENTS</Link>
							<Link to="/churches/">CHURCHES</Link>
							<Link to="/about/">ABOUT</Link>
							<a href="http://socalnetwork.org/resources/">RESOURCES</a>
						</FootMenu>

						<FootBox>
							<h4>Questions or comments?<br />
									Contact us here!</h4>
							<p>Phone: <a href="tel:1-805-624-0389">(805) 624-0389</a><br />
									Email: <a href="mailto:socalregion1@gmail.com">socalregion1@gmail.com</a></p>
						</FootBox>

						<FootLogos>
							<img style={imgStyles} src={require('../images/SoCal.png')} alt="socal region 1 logo" />
							<img style={imgStyles} src={require('../images/region1-logo.png')} alt="socal region 1 logo" />
						</FootLogos>

						<Copyright>&copy;Copyright SoCal Network Region 1 2018<br />- All rights reserved.</Copyright>
					</RightFoot>
				</FooterContent>
			</FooterContainer>
		);
	}
}

export default Footer;
