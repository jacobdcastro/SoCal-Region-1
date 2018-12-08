import React from 'react';
import styled from 'styled-components';
import aboutBannerImg from '../images/3-about-banner.jpg';

const PageHeaderContainer = styled.div`
   margin: 0;
`;

const Header = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-image: url(${aboutBannerImg});
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
   @media (max-width: 480px) {
      font-size: 2.2em;
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
      font-weight: 700;
      letter-spacing: 10px;
      border: 5px solid #fff;
      margin: 20px 0px;
      padding: 5px 5px 5px 19px;
      text-align: center;
   }
   @media (max-width: 480px) {
      font-size: 1.7em;
      font-weight: 700;
      letter-spacing: 10px;
      border: 3.5px solid #fff;
      margin: 20px 0px;
      padding: 5px 3px 5px 10px;
      text-align: center;
   }
`;

class PageHeader extends React.Component {
   render() {
      return (
         <PageHeaderContainer>
            <Header>
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