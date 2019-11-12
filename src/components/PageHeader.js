import React from 'react';
import styled from 'styled-components';
import aboutBannerImg from '../images/3-about-banner.jpg';
import churchesBannerImg from '../images/2-churches-banner.jpg';
import eventsBannerImg from '../images/1-events-banner.jpg';

const PageHeaderContainer = styled.div`
   margin: 0;
   .aboutPage {
      background-image: url(${aboutBannerImg});
   }
   .churchesPage {
      background-image: url(${churchesBannerImg});
   }
   .eventsPage {
      background-image: url(${eventsBannerImg});
   }
`;

const Header = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-position: center;
   background-size: cover;
   background-color: #aaa;
   background-blend-mode: multiply;
   color: #fff;
   margin: 0px;
   height: 300px;
   img {
      height: 35px;
      width: auto;
      align-self: center;
   }
   @media (min-width: 724px) {
      height: 400px;
      img {
         height: 45px;
         width: auto;
      }
   }
   @media (min-width: 1080px) {
      height: 485px;
   }
`;

const HeaderContent = styled.div`
   display: flex;
   flex-direction: column; 
   justify-content: center;
   align-items: center;
   h1 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      display: inline-block;
      font-size: 3.2em;
      font-weight: 700;
      letter-spacing: 10px;
      border: 5px solid #fff;
      margin: 20px 0px;
      padding: 5px 5px 5px 19px;
      text-align: center;
   }
   @media (max-width: 480px) {
      h1 {
      font-size: 1.7em;
      border: 3.5px solid #fff;
      padding: 5px 3px 5px 10px;
      }
   }
   @media (min-width: 724px) {
      h1 {
         font-size: 4.2em;
         letter-spacing: 13px;
         border: 7px solid #fff;
      }
   }
`;

class PageHeader extends React.Component {
   render() {
      console.log(this.props.className)
      return (
         <PageHeaderContainer>
            <Header className={this.props.className} >
               <HeaderContent>
                  <h1>{this.props.headline}</h1>
               </HeaderContent>
               <img alt="" src={require('../images/down-arrow.png')} />
            </Header>
         </PageHeaderContainer>
      );
   }
}

export default PageHeader;