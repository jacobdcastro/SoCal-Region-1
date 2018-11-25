import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import Footer from '../components/Footer';

const HomeContainer= styled.div`
	margin: 0;
`;

const HeaderBanner = styled.div`
	background-image: url("../images/stock-photos/pismo-beach.jpg");
	background-size: cover;
	background-position: center;
	color: #fff;
	margin: 0px;
	height: 500px;
`;

const HeaderContent = styled.div`
	h3 {
		font-weight: 700;
		letter-spacing: 10px;
		margin: 0px;
		padding: 0px;
		text-align: center;
	}
	h1 {
		font-weight: 700;
		letter-spacing: 10px;
		border: 5px solid #fff;
		margin: 20px 0px;
		padding: 5px 5px 5px 19px;
		text-align: center;
	}
	h4 {
		font-weight: 700;
		letter-spacing: 10px;
		margin: 0px;
		padding: 0px;
		text-align: center;
	}
`;

const DownArrowIcon = styled.img`
	height: 35px;
	width: auto;
`;


	const IntroBanner = styled.div`
		background-color: #181818;
		color: #ffffff;
		height: 100px;
		margin: 0px;
		padding-left: 10%;
		padding-right: 10%;
		letter-spacing: 3px;
		font-size: 1.25em;
	`;

class Home extends React.Component {
	constructor() {

	}

	render() {
		return (
			<HomeContainer>
				<SideNav />
				<Navbar />
				<div>
		      <HeaderContent>
		        <h3>WELCOME TO</h3>
		        <h1>SOCAL REGION 1</h1>
		        <h4>We are glad you're here!</h4>
		      </HeaderContent>
		      <DownArrowIcon src="images/icons/down-arrow.png" alt="down arrow icon" />
		    </div>
				<div>
					<IntroBanner className="banner1" id="banner1">
			      <h3>Reach.</h3>
			      <h3>Inspire.</h3>
			      <h3>Empower.</h3>
			    </IntroBanner>
					<div>
						<Banner1 />
						<Banner2 />
						<Banner1 />
						<Banner2 />
					</div>

					<Footer />
				</div>
			</HomeContainer>
		);
	}
}

export default Home;
