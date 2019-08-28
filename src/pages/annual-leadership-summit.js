import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Head from '../utils/Helmet';
import Moment from 'react-moment';
import Container from '../components/summit/Summit2019Styles';
import summitLogo from '../images/2019-summit-images/thrive-logo.png';
import mtnLogo from '../images/2019-summit-images/thrive-mtn.png';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import regBtn from '../images/2019-summit-images/register-button.svg';

// component and styles for video player
import { Player } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';

class Summit2019 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         mobileNavIsOpen: false,
      };
   }

   openMobileNav = () => {
      this.setState({ mobileNavIsOpen: true });
   };

   closeMobileNav = () => {
      this.setState({ mobileNavIsOpen: false });
   };

   uppercaseFilter = s => {
      return s.toUpperCase();
   };

   render() {
      const pageData = this.props.data.contentfulAnnualLeadershipSummit2019;

      return (
         <Container>
            <Head title="THRIVE 2019 - Annual Leadership Summit" />

            <SideNav
               id="sideNav"
               action={this.closeMobileNav}
               open={this.state.mobileNavIsOpen}
            />

            <Img
               id="backgroundImg"
               fluid={this.props.data.file.childImageSharp.fluid}
               style={{
                  width: '100vw',
                  height: 'auto',
                  position: 'fixed',
                  overflow: 'hidden',
               }}
            />

            <div id="pageContent">
               <Navbar
                  action={this.openMobileNav}
                  mobileNavIsOpen={this.state.mobileNavIsOpen}
                  isSummitPage
               />

               <div className="header-content">
                  <p className="headerDate">
                     <Moment
                        format="MMMM Do"
                        filter={this.uppercaseFilter}
                        date={pageData.dateOfEvent}
                     />
                  </p>
                  <img
                     className="headerLogo"
                     src={summitLogo}
                     alt="2019 Summit Logo - THRIVE"
                  />
                  <img
                     className="mtnLogo"
                     src={mtnLogo}
                     alt="Triangles resembling mountains"
                  />
               </div>

               <div className="content-container">
                  <div className="videoSection">
                     <div className="videoBorder">
                        <Player
                           poster={pageData.videoPoster.fluid.src}
                           src={pageData.promoVideo.file.url}
                        />
                     </div>
                  </div>

                  <h1>
                     SoCal Region 1<br />
                     Annual Leadership Summit
                  </h1>
                  <div
                     className="description"
                     dangerouslySetInnerHTML={{
                        __html:
                           pageData.introDescription.childContentfulRichText
                              .html,
                     }}
                  />
                  <div className="DTL">
                     <h1>
                        <i>
                           When:{' '}
                           <Moment
                              format="dddd, MMMM Do, YYYY"
                              date={pageData.dateOfEvent}
                           />
                        </i>
                     </h1>
                     <h1>
                        <i>Where: {pageData.locationOfEvent}</i>
                     </h1>
                  </div>

                  <div id="register">
                     <button className="registerBtn">
                        <a href={pageData.registrationLink}>
                           <div>
                              <img
                                 src={regBtn}
                                 alt="shape of paint brush strokes"
                                 title="Register Now"
                              />
                              <span>Register Now</span>
                           </div>
                        </a>
                     </button>
                  </div>
               </div>
            </div>
            {/* <Footer style={{ zIndex: '5', position: 'absolute', bottom: '0' }} /> */}
         </Container>
      );
   }
}

export default Summit2019;

export const SUMMIT_2019_QUERY = graphql`
   query SUMMIT_2019_QUERY {
      contentfulAnnualLeadershipSummit2019(
         id: { eq: "fdded862-ca04-5557-be09-95595a77103b" }
      ) {
         id
         themeTitle
         dateOfEvent
         locationOfEvent
         registrationLink
         promoVideo {
            id
            file {
               url
            }
         }
         videoPoster {
            id
            fluid {
               src
            }
         }
         introDescription {
            childContentfulRichText {
               html
            }
         }
         speaker {
            id
            titleOfList
         }
      }

      file(relativePath: { eq: "2019-summit-images/summit-page-bg.png" }) {
         childImageSharp {
            fluid(quality: 100) {
               ...GatsbyImageSharpFluid_noBase64
            }
         }
      }

      # summitLogo: file(
      #    relativePath: { eq: "2019-summit-images/thrive-logo.png" }
      # ) {
      #    childImageSharp {
      #       fluid(quality: 100) {
      #          ...GatsbyImageSharpFluid_tracedSVG
      #       }
      #    }
      # }
   }
`;
