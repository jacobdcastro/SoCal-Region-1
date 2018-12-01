import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1024px) {
		flex-direction: ${props => props.primary ? 'row' : 'row-reverse'};
	}
`;

const BannerTitle = styled.h2`
	display: flex;
	justify-content: center;
	align-content: space-around;
	flex-direction: column;
	font-family: 'neuzeit-grotesk', 'sans-serif';
	margin: 0px;
	padding: 0px;
	height: 245px;
	background-image: url(${props => props.bgImg});
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
	@media (min-width: 1024px) {
		font-size: 3.75em;
		letter-spacing: 12px;
		height: 315px
		width: 60%;
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
		font-family: 'neuzeit-grotesk', 'sans-serif';
		height: 200px;
		padding: 15px;
		background-color: #D1D3D4;
	}
	a:visited,
	a:active {
		font-family: 'neuzeit-grotesk', 'sans-serif';
		text-decoration: none;
	}
	@media (min-width: 724px) {
		p {
			font-size: 1.35em;
			letter-spacing: 5px;
		}
	}
	@media (min-width: 1024px) {
		flex-direction: row;
		height: 285px;
		width: 40%;
		p {
			font-size: 1.6em;
			text-align: ${props => props.primary ? 'right' : 'left'};
		}
	}
`;

const BannerButton = styled.h5`
	font-family: 'neuzeit-grotesk', 'sans-serif';
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
			<BannerContainer primary={this.props.primary} >
				<BannerTitle bgImg={this.props.bgImg} >{this.props.headline.toUpperCase()}</BannerTitle>
				<BannerContent primary={this.props.primary}>
					{this.props.paragraph}
					<Link to={this.props.toPage}><BannerButton>See {this.props.headline.toUpperCase()}</BannerButton></Link>
				</BannerContent>
			</BannerContainer>
		);
	}
}

export default Banner;
