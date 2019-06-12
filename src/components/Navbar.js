import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
   ${props => props.isSummitPage && `position: absolute;`}
   top: 0;
   left: 0;
   z-index: 3;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background-color: ${props =>
      props.transparentBG ? 'rgba(0,0,0,0)' : '#181818'};
   margin: 0;
   padding: 0;
   width: 100%;
   @media (max-width: 734px) {
      flex-direction: row;
      justify-content: space-around;
      height: 75px;
      width: 100%;
   }
   @media (min-width: 735px) {
      height: 100px;
   }
   @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-around;
   }
`;

const NavLogo = styled.img`
   ${props => props.isSummitPage && `position: absolute;`}
   height: 100px;
   width: auto;
   margin: 0;
   padding: 0;
   @media (max-width: 734px) {
      padding-left: 8%;
      height: 70px;
      width: auto;
   }
   @media (min-width: 735px) {
      height: 90px;
   }
`;

const LeftNav = styled.div`
   @media (max-width: 734px) {
      display: flex;
      width: 50%;
      height: 75px;
   }
`;

const RightNav = styled.div`
   ${props => props.isSummitPage && `position: absolute;`}
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
         background-color: #5e9ea2;
         transition: 350ms;
      }
   }
   .summitLinkDesk {
      background-color: #5e9ea2;
      &:hover {
         background-color: black;
      }
   }
   @media (max-width: 734px) {
      display: flex;
      width: 100px;
      height: 75px;
      padding: 0;
      margin: 0;
      a {
         display: none;
      }
   }
   @media (min-width: 735px) {
      width: auto;
   }
   @media (min-width: 1024px) {
      font-size: 1.3em;
      padding: 22px;
   }
`;

const MobileMenuButton = styled.img`
   @media (max-width: 734px) {
      display: inline;
      height: 35px;
      width: auto;
      margin: auto;
      padding: 5px;
      &:hover {
         cursor: pointer;
      }
   }
   @media (min-width: 735px) {
      display: none;
   }
`;

class Navbar extends React.Component {
   render() {
      return (
         <NavbarContainer
            id="fullNav"
            transparentBG={this.props.transparentBG}
            isSummitPage={this.props.isSummitPage}
         >
            <LeftNav>
               <Link to=".">
                  <NavLogo src={require('../images/SoCal.png')} />
               </Link>
            </LeftNav>
            <RightNav>
               <Link to="/events">EVENTS</Link>
               <Link to="/churches">CHURCHES</Link>
               <Link to="/about">ABOUT</Link>
               <a href="http://socalnetwork.org/resources/">RESOURCES</a>
               <Link
                  to="/annual-leadership-summit-2019"
                  className="summitLinkDesk"
               >
                  SUMMIT
               </Link>
               <MobileMenuButton
                  onClick={this.props.action}
                  src={require('../images/menu-button.svg')}
                  alt="menu icon"
               />
            </RightNav>
         </NavbarContainer>
      );
   }
}

export default Navbar;
