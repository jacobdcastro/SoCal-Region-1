import React from 'react';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import indexBannerImg from '../images/pismo-beach.jpg';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const HomeContainer = styled.div`
   margin: 0;
   overflow-x: hidden;
`;

const Header = styled.header`
   overflow-x: hidden;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: ${props => props.windowWidth + 'px'};
   @media (min-width: 1024px) {
      width: 100vw;
      height: 700px;
   }
`;

const HeaderBanner = styled.div`
   overflow-x: hidden;
   display: flex;
   flex-direction: column;
   color: #fff;
   margin: 0px;
   padding: 0px;
   height: 500px;
`;

const HeaderContent = styled.div`
   overflow-x: hidden;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-grow: 1;
   margin: 0;
   padding: 0;
   h3 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      font-weight: 700;
      letter-spacing: 10px;
      margin: 0px;
      padding: 0px;
      text-align: center;
   }
   h1 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      font-weight: 700;
      letter-spacing: 10px;
      border: 5px solid #fff;
      margin: 20px 0px;
      padding: 5px 5px 5px 19px;
      text-align: center;
   }
   h4 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      font-weight: 700;
      letter-spacing: 10px;
      margin: 0px;
      padding: 0px;
      text-align: center;
   }
   @media (max-width: 480px) {
      h1 {
         font-size: 1.2em;
         font-weight: 700;
         letter-spacing: 10px;
         border: 3.5px solid #fff;
         margin: 20px 0px;
         padding: 5px 3px 5px 10px;
         text-align: center;
      }
   }
   @media (min-width: 724px) {
      h3 {
         font-size: 1.5em;
      }
      h1 {
         font-size: 1.8em;
      }
      h1 {
         font-size: 3.5em;
         border-width: 6.7px;
         padding: 9px 9px 9px 22px;
      }
   }
   @media (min-width: 1024px) {
      h3 {
         font-size: 2.5em;
      }
      h1 {
         font-size: 4.5em;
         letter-spacing: 18px;
         border-width: 11px;
         padding: 9px 9px 9px 22px;
      }
      h4 {
         font-size: 2em;
      }
   }
`;

const DownArrowIcon = styled.img`
   align-self: center;
   margin: 0;
   height: 35px;
   width: auto;
   @media (min-width: 1024px) {
      height: 55px;
      width: auto;
   }
`;

const IntroBanner = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   font-family: 'neuzeit-grotesk', 'sans-serif';
   background-color: #181818;
   color: #ffffff;
   height: 100px;
   margin: 0px;
   padding-left: 10%;
   padding-right: 10%;
   letter-spacing: 3px;
   font-size: 1.25em;
   @media (min-width: 724px) {
      font-size: 1.55em;
   }
   @media (min-width: 1024px) {
      font-size: 1.85em;
      letter-spacing: 7.4px;
      height: 125px;
   }
`;

class Index extends React.Component {
   constructor(props) {
      super(props);

      this.openMobileNav = this.openMobileNav.bind(this);
      this.closeMobileNav = this.closeMobileNav.bind(this);

      this.state = {
         mobileNavIsOpen: false,
      };
   }

   componentDidMount() {
      this.setState({ windowWidth: window.innerWidth });
      window.addEventListener('resize', () => {
         let w = window.innerWidth;
         this.setState({ windowWidth: w });
      });
   }

   openMobileNav() {
      this.setState({
         mobileNavIsOpen: true,
      });
   }

   closeMobileNav() {
      this.setState({
         mobileNavIsOpen: false,
      });
   }

   render() {
      const { data } = this.props;
      let { windowWidth } = this.state;

      let imgMinHeight;
      if (windowWidth < 480) {
         imgMinHeight = '535px';
      } else if (windowWidth > 1023) {
         imgMinHeight = '700px';
      } else if (windowWidth >= 480) {
         imgMinHeight = '535px';
      }

      return (
         <HomeContainer>
            <Head title="SoCal Region 1" />
            <SideNav
               action={this.closeMobileNav}
               open={this.state.mobileNavIsOpen}
            />
            <Navbar
               action={this.openMobileNav}
               mobileNavIsOpen={this.state.mobileNavIsOpen}
            />
            <Header windowWidth={windowWidth}>
               <Img
                  fluid={data.sunsetImg.childImageSharp.fluid}
                  style={{
                     position: 'absolute',
                     zIndex: '-1',
                     height: 'auto',
                     minHeight: imgMinHeight,
                     width: 'auto',
                     minWidth: '100vw',
                     objectFit: 'cover',
                     objectPosition: 'center',
                     overflowX: 'hidden',
                  }}
                  imgStyle={{ overflowX: 'hidden' }}
               />
               <HeaderBanner>
                  <HeaderContent>
                     <h3>WELCOME TO</h3>
                     <h1>SOCAL REGION 1</h1>
                     <h4>We are glad you're here!</h4>
                  </HeaderContent>
               </HeaderBanner>
               <DownArrowIcon
                  src={require('../images/down-arrow.png')}
                  alt="down arrow icon"
               />
            </Header>
            <div>
               <IntroBanner className="banner1" id="banner1">
                  <h3>Reach.</h3>
                  <h3>Inspire.</h3>
                  <h3>Empower.</h3>
               </IntroBanner>
               <div>
                  <Banner
                     primary={true}
                     toPage="/events"
                     headline="events"
                     bgImg={data.eventsImg.childImageSharp}
                     paragraph={
                        <p>
                           Find out more about
                           <br />
                           events happening
                           <br />
                           throughout Region 1
                        </p>
                     }
                  />
                  <Banner
                     primary={false}
                     toPage="/churches"
                     headline="churches"
                     bgImg={data.churchesImg.childImageSharp}
                     paragraph={
                        <p>
                           Get to know our
                           <br />
                           community and find
                           <br />a church near you
                        </p>
                     }
                  />
                  <Banner
                     primary={true}
                     toPage="/about"
                     headline="about"
                     bgImg={data.aboutImg.childImageSharp}
                     paragraph={
                        <p>
                           Learn about who we are
                           <br />
                           and meet our
                           <br />
                           regional leadership team
                        </p>
                     }
                  />
                  <Banner
                     primary={false}
                     headline="resources"
                     bgImg={data.resourcesImg.childImageSharp}
                     paragraph={
                        <p>
                           Resources for churches
                           <br />
                           and ministry leaders
                        </p>
                     }
                  />
               </div>

               <Footer />
            </div>
         </HomeContainer>
      );
   }
}

export default Index;

export const bannerImgQuery = graphql`
   query {
      sunsetImg: file(relativePath: { eq: "pismo-beach.jpg" }) {
         childImageSharp {
            fluid(quality: 100) {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      eventsImg: file(relativePath: { eq: "1-events-banner.jpg" }) {
         childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      churchesImg: file(relativePath: { eq: "2-churches-banner.jpg" }) {
         childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      aboutImg: file(relativePath: { eq: "3-about-banner.jpg" }) {
         childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
      resourcesImg: file(relativePath: { eq: "4-resources-banner.jpg" }) {
         childImageSharp {
            fluid {
               ...GatsbyImageSharpFluid_withWebp
            }
         }
      }
   }
`;
