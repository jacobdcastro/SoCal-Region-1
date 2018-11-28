import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-image: ${props => props.bgImg};
	@media (min-width: 1024px) {
		flex-direction: ${props => props.primary ? 'row' : 'row-reverse'};
	}
`;

const BannerTitle = styled.h2`
	display: flex;
	justify-content: center;
	align-content: space-around;
	flex-direction: column;
	margin: 0px;
	padding: 0px;
	height: 245px;
	background-position: center;
	background-size: cover;
	background-color: gray;
	background-blend-mode: multiply;
	color: #fff;
	text-align: center;
	font-size: 3em;
	letter-spacing: 10px;
	@media (max-width: 480px) {
		font-size: 2.2em;
	}
	@media (min-width: 724px) {
		font-size: 3.75em;
		letter-spacing: 12px;
	}
`;

const BannerContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 200px;
	padding: 15px;
	background-color: #D1D3D4;
	p {
		height: 200px;
		padding: 15px;
		background-color: #D1D3D4;
	}
	a:visited,
	a:active {
		text-decoration: none;
	}
	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

const BannerButton = styled.h5`
	margin: 0px;
	padding: 15px;
	background-color: #777;
	color: #fff;
	font-size: 1.1em;
	letter-spacing: 2px;
	text-transform: uppercase;
	&:hover {
		background-color: #5E9EA2;
		transition: 380ms;
	}
`;

class Banner extends React.Component {
	render() {
		return (
			<BannerContainer primary={this.props.primary} bgImg={this.props.bgImg}>
				<BannerTitle>{this.props.headline.toUpperCase()}</BannerTitle>
				<BannerContent className="banner-content">
					{this.props.paragraph}
					<Link to={this.props.toPage}><h5 className="banner-buttons">See Events</h5></Link>
				</BannerContent>
			</BannerContainer>
		);
	}
}

export default Banner;
