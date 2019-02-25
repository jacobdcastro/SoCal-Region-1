import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'
import Head from '../utils/Helmet';
import PageContainer from '../components/summit/SummitPageContainer';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PhotoGallery from '../components/summit/PhotoGallery';
// import SpeakerBio from '../components/summit/SpeakerBio';
// import BreakoutButton from '../components/summit/BreakoutButton';
// import BreakoutPopup from '../components/summit/BreakoutPopup';

// import speakerData from '../utils/summitSpeakerData.json';

class Summit extends React.Component {
   constructor(props) {
      super(props);
      // this.openMobileNav = this.openMobileNav.bind(this);
      // this.closeMobileNav = this.closeMobileNav.bind(this);
      // this.toggleShepherdBio = this.toggleShepherdBio.bind(this);
      // this.toggleDogteromBio = this.toggleDogteromBio.bind(this);
      // this.toggleMossBio = this.toggleMossBio.bind(this);
      // this.toggleQuintanaBio = this.toggleQuintanaBio.bind(this);
      // this.toggleJohnsonBio = this.toggleJohnsonBio.bind(this);
      // this.toggleShepherdPopup = this.toggleShepherdPopup.bind(this);
      // this.toggleDogteromPopup = this.toggleDogteromPopup.bind(this);
      // this.toggleMossPopup = this.toggleMossPopup.bind(this);
      // this.toggleQuintanaPopup = this.toggleQuintanaPopup.bind(this);
      // this.toggleJohnsonPopup = this.toggleJohnsonPopup.bind(this);

      this.state = {
         mobileNavIsOpen: false,

         // richShepherdBioIsShowing: false,
         // billDogteromBioIsShowing: false,
         // joeMossBioIsShowing: false,
         // ricardoQuintanaBioIsShowing: false,
         // joannJohnsonBioIsShowing: false,
         
         // richShepherdPopupIsShowing: false,
         // billDogteromPopupIsShowing: false,
         // joeMossPopupIsShowing: false,
         // ricardoQuintanaPopupIsShowing: false,
         // joannJohnsonPopupIsShowing: false,
      };
   }
   // toggleShepherdBio() { this.setState({ richShepherdBioIsShowing: !this.state.richShepherdBioIsShowing }) }
   // toggleDogteromBio() { this.setState({ billDogteromBioIsShowing: !this.state.billDogteromBioIsShowing }) }
   // toggleMossBio() { this.setState({joeMossBioIsShowing: !this.state.joeMossBioIsShowing}) }
   // toggleQuintanaBio() { this.setState({ricardoQuintanaBioIsShowing: !this.state.ricardoQuintanaBioIsShowing}) }
   // toggleJohnsonBio() { this.setState({joannJohnsonBioIsShowing: !this.state.joannJohnsonBioIsShowing}) }

   // toggleShepherdPopup() { this.setState({ richShepherdPopupIsShowing: !this.state.richShepherdPopupIsShowing }) }
   // toggleDogteromPopup() { this.setState({ billDogteromPopupIsShowing: !this.state.billDogteromPopupIsShowing }) }
   // toggleMossPopup() { this.setState({ joeMossPopupIsShowing: !this.state.joeMossPopupIsShowing }) }
   // toggleQuintanaPopup() { this.setState({ ricardoQuintanaPopupIsShowing: !this.state.ricardoQuintanaPopupIsShowing }) }
   // toggleJohnsonPopup() { this.setState({ joannJohnsonPopupIsShowing: !this.state.joannJohnsonPopupIsShowing }) }

   openMobileNav() {this.setState({mobileNavIsOpen: true})}
   closeMobileNav() {this.setState({mobileNavIsOpen: false})}

   render() {
      return (
         <PageContainer>
            <Head title="Annual Leadership Summit" />
            <header>

               <SideNav id="sideNav" action={this.closeMobileNav} open={this.state.mobileNavIsOpen} />
               <Navbar action={this.openMobileNav} mobileNavIsOpen={this.state.mobileNavIsOpen} transparentBG />

               <div className="header-content">
                  <Img className="headerImg" fluid={this.props.data.file.childImageSharp.fluid} />
                  {/* <h3>ANNUAL LEADERSHIP SUMMIT</h3> */}
                  {/* <div className="beyond-headline headline">
                     <div className="line white-line1"></div>
                     <h1>BEYOND</h1>
                  </div> */}
               </div>

            </header>
            <div className="content-container">
               <div className="info-section">
                  <div className="summary">
                     {/* <p>
                        It is our prayer and belief that our churches, our leaders, our ministers, and our people would walk in the power and knowledge that God is capable of doing BEYOND what we could ever think, ask or imagine <a href="https://www.biblegateway.com/passage/?search=Ephesians+3%3A20-21&version=NIV">(Ephesians 3:20-21)</a>. We want HIM to be glorified in all that we do and accomplish, for it is only by HIS power that
                     </p>
                     <h5>IT. IS. DONE.</h5>
                     <p>
                        Our prayer is that the Lord would use this time of fellowship, worship and the Word to break barriers in our lives, our ministries, in our region and our world! God is truly capable of doing BEYOND what we think or imagine, and we are believing that this time would be a tool to inspire and expand our faith as to what God wants to do in and through us all!
                     </p> */}
                     <p>
                        This will be our 4th Annual Leadership Summit and each year just gets better and better! (if we do say so ourselves) But, how can it not be an incredible time when we come together as a whole Region of pastors, ministry leaders an people who are passionate for God's church?
                     </p>
                     <p>
                        We've prayed and purposed the Summit as a space and time dedicated to resources and raising up <strong>YOU</strong>, our pastors, leaders and churches, to further reach all that God has in store.
                     </p>
                     <p>
                        So, we invite and encourage all of our churches to mark their calendars and set aside this time to be inspured and equipped, and <i>BONUS</i>: come take advantage of this built-in opportunity to further connect with other pastors and leaders around you.
                     </p>
                  </div>

                  <PhotoGallery photos={this.props.data.allContentfulSummitPhotoGallery.edges[0].node.photoList} />

                  <div className="speakers">
                     {/* <h3><i>Keynote Speaker:</i></h3> */}

                     {/* <div id="johnMartin" className="john-martin">
                        <div className="john-title">
                           <img className="john-pic" src={require('../images/summit-photos/edited/john-martin2.png')} alt="Portrait of Pastor John Martin" />
                           <div>
                              <h4>Pastor John Martin</h4>
                              <h5>Victorville First Assembly</h5>
                           </div>
                        </div>
                        <p>In 2006, Pastor John C. Martin moved to Victorville, California from Seattle, Washington to pastor Victorville First Assembly. In the almost 12 years that Pastor John has been pastoring at Victorville First Assembly, the church has expanded from one to ten campus locations. In addition, the church offers worship services in English, Spanish, Korean, Indonesian and American Sign Language. The church's ministries have more than doubled in number and currently include the Feed My Sheep Food Bank, a School of Ministry, and Victor Valley Christian School. Pastor John has a heart to reach people for Christ and to develop fully devoted followers of God! As witnessed in the growth and expansion of the ministries underneath his leadership, he knows he serves a Big God who is capable of more than we could think or imagine, and he chases after all that God has at full speed.</p>
                     </div> */}

                     {/* <h4 className="breakout-title"><i>With Breakout Speakers Featuring:</i></h4> */}

                     {/* ===========================================================
                     =========================================================== */}

                     {/* <SpeakerBio
                        speaker={speakerData.shepherd}
                        bioIsShowing={this.state.richShepherdBioIsShowing}
                        action={this.toggleShepherdBio}
                     />
                     <SpeakerBio
                        speaker={speakerData.dogterom}
                        bioIsShowing={this.state.billDogteromBioIsShowing}
                        action={this.toggleDogteromBio}
                     />
                     <SpeakerBio
                        speaker={speakerData.moss}
                        bioIsShowing={this.state.joeMossBioIsShowing}
                        action={this.toggleMossBio}
                     />
                     <SpeakerBio
                        speaker={speakerData.quintana}
                        bioIsShowing={this.state.ricardoQuintanaBioIsShowing}
                        action={this.toggleQuintanaBio}
                     />
                     <SpeakerBio
                        speaker={speakerData.johnson}
                        bioIsShowing={this.state.joannJohnsonBioIsShowing}
                        action={this.toggleJohnsonBio}
                     /> */}

                  </div>
               </div> {/* /.info-section */}

               {/* <div className="description-container">
                  <h1>Breakout Sessions</h1>
                  <div className="description-list">

                     <BreakoutButton 
                        idName="richShepherdTalk"
                        speakerData={speakerData.shepherd}
                        action={this.toggleShepherdPopup}
                     />
                     <BreakoutButton
                        idName="billDogteromTalk"
                        speakerData={speakerData.dogterom}
                        action={this.toggleDogteromPopup}
                     />
                     <BreakoutButton
                        idName="joeMossTalk"
                        speakerData={speakerData.moss}
                        action={this.toggleMossPopup}
                     />
                     <BreakoutButton 
                        idName="ricardoQuintanaTalk"
                        speakerData={speakerData.quintana}
                        action={this.toggleQuintanaPopup}
                     />
                     <BreakoutButton
                        idName="joannJohnsonTalk"
                        speakerData={speakerData.johnson}
                        action={this.toggleJohnsonPopup}
                     />
                  </div>
               </div> */}

               {/* <BreakoutPopup
                  idName="richShepherdPopup"
                  speakerData={speakerData.shepherd}
                  popupIsShowing={this.state.richShepherdPopupIsShowing}
                  action={this.toggleShepherdPopup}
               />
               <BreakoutPopup
                  idName="billDogteromPopup"
                  speakerData={speakerData.dogterom}
                  popupIsShowing={this.state.billDogteromPopupIsShowing}
                  action={this.toggleDogteromPopup}
               />
               <BreakoutPopup
                  idName="joeMossPopup"
                  speakerData={speakerData.moss}
                  popupIsShowing={this.state.joeMossPopupIsShowing}
                  action={this.toggleMossPopup}
               />
               <BreakoutPopup
                  idName="ricardoQuintanaPopup"
                  speakerData={speakerData.quintana}
                  popupIsShowing={this.state.ricardoQuintanaPopupIsShowing}
                  action={this.toggleQuintanaPopup}
               />
               <BreakoutPopup
                  idName="joannJohnsonPopup"
                  speakerData={speakerData.johnson}
                  popupIsShowing={this.state.joannJohnsonPopupIsShowing}
                  action={this.toggleJohnsonPopup}
               /> */}
         
               {/* <div className="schedule-section">
                  <div className="schedule-headline headline">
                     <h1>SCHEDULE</h1>
                     <div className="line white-line2"></div>
                  </div>
                  <div className="schedule">
                     <h4>WELCOME</h4>
                     <div className="circle"></div>
                     <h4>MORNING SESSION</h4>
                     <div className="circle"></div>
                     <h4>BREAKOUT 1</h4>
                     <div className="circle"></div>
                     <h4>LUNCH</h4>
                     <div className="circle"></div>
                     <h4>BREAKOUT 2</h4>
                     <div className="circle"></div>
                     <h4>AFTERNOON SESSION</h4>
                     <div className="circle"></div>
                     <h4>CLOSING</h4>
                  </div>
               </div> */}

               <div className="cost-section">
                  <h2>Cost To Attend</h2>
                  <h3>Prices For Next Year's Summit<br />
                  To Be Announced Soon!</h3>
               </div>

               {/* <div className="register-section">
                  <div className="register-headline headline">
                     <h1>REGISTER</h1>
                     <div className="line white-line3"></div>
                  </div>
                  <div className="buttons">
                     <div className="btn btn1"><i>REGISTRATION DETAILS COMING SOON</i></div>
                  </div>
               </div> */}

               <p className="copy">&copy; SoCal Region 1 - 2018</p>
            </div>
         </PageContainer>
      );
   }
}

export default Summit;

export const aboutQuery = graphql`
	query {
      file(relativePath: { eq: "summit-photos/Website_Summit-2019.png"}) {
         childImageSharp {
            fluid(quality: 100, maxWidth: 760) {
               ...GatsbyImageSharpFluid
            }
         }
      }
      allContentfulSummitPhotoGallery {
         edges {
            node {
               galleryTitle
               photoList {
                  id
                  description
                  fixed {
                     width
                     height
                     src
                  }
               }
            }
         }
      }
   }
`;
