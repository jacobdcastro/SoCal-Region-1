import React from 'react';
import { graphql } from 'gatsby';
import Head from '../utils/Helmet';
import PageContainer from '../components/summit/SummitPageContainer';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PhotoGallery from '../components/summit/PhotoGallery';
import SpeakerBio from '../components/summit/SpeakerBio';
import BreakoutButton from '../components/summit/BreakoutButton';
import BreakoutPopup from '../components/summit/BreakoutPopup';

import speakerData from '../utils/summitSpeakerData.json';

class Summit extends React.Component {
   constructor(props) {
      super(props);
      this.openMobileNav = this.openMobileNav.bind(this);
      this.closeMobileNav = this.closeMobileNav.bind(this);
      this.toggleShepherdBio = this.toggleShepherdBio.bind(this);
      this.toggleDogteromBio = this.toggleDogteromBio.bind(this);
      this.toggleMossBio = this.toggleMossBio.bind(this);
      this.toggleQuintanaBio = this.toggleQuintanaBio.bind(this);
      // this.toggleJohnsonBio = this.toggleJohnsonBio.bind(this);
      // this.toggleShepherdPopup = this.toggleShepherdPopup.bind(this);
      // this.toggleDogteromPopup = this.toggleDogteromPopup.bind(this);
      // this.toggleMossPopup = this.toggleMossPopup.bind(this);
      // this.toggleQuintanaPopup = this.toggleQuintanaPopup.bind(this);
      // this.toggleJohnsonPopup = this.toggleJohnsonPopup.bind(this);


      this.state = {
         mobileNavIsOpen: false,

         richShepherdBioIsShowing: false,
         billDogteromBioIsShowing: false,
         joeMossBioIsShowing: false,
         ricardoQuintanaBioIsShowing: false,
         joannJohnsonBioIsShowing: false,
         
         richShepherdPopupIsShowing: false,
         billDogteromPopupIsShowing: false,
         joeMossPopupIsShowing: false,
         ricardoQuintanaPopupIsShowing: false,
         joannJohnsonPopupIsShowing: false,
      };
   }
   toggleShepherdBio() { this.setState({ richShepherdBioIsShowing: !this.state.richShepherdBioIsShowing }) }
   toggleDogteromBio() { this.setState({ billDogteromBioIsShowing: !this.state.billDogteromBioIsShowing }) }
   toggleMossBio() { this.setState({joeMossBioIsShowing: !this.state.joeMossBioIsShowing}) }
   toggleQuintanaBio() { this.setState({ricardoQuintanaBioIsShowing: !this.state.ricardoQuintanaBioIsShowing}) }
   toggleJohnsonBio() { this.setState({joannJohnsonBioIsShowing: !this.state.joannJohnsonBioIsShowing}) }

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
                  <h3>ANNUAL LEADERSHIP SUMMIT</h3>
                  <div className="beyond-headline headline">
                     <div className="line white-line1"></div>
                     <h1>BEYOND</h1>
                  </div>
               </div>

            </header>
            <div className="content-container">
               <div className="info-section">
                  <div className="summary">
                     <p>
                        It is our prayer and belief that our churches, our leaders, our ministers, and our people would walk in the power and knowledge that God is capable of doing BEYOND what we could ever think, ask or imagine <a target="_blank" href="https://www.biblegateway.com/passage/?search=Ephesians+3%3A20-21&version=NIV">(Ephesians 3:20-21)</a>. We want HIM to be glorified in all that we do and accomplish, for it is only by HIS power that
                     </p>
                     <h5>IT. IS. DONE.</h5>
                     <p>
                        Our prayer is that the Lord would use this time of fellowship, worship and the Word to break barriers in our lives, our ministries, in our region and our world! God is truly capable of doing BEYOND what we think or imagine, and we are believing that this time would be a tool to inspire and expand our faith as to what God wants to do in and through us all!
                     </p>
                  </div>

                  <PhotoGallery photos={this.props.data.allContentfulSummitPhotoGallery.edges[0].node.photoList} />

                  <div className="speakers">
                     <h3><i>Keynote Speaker:</i></h3>

                     <div id="johnMartin" className="john-martin">
                        <div className="john-title">
                           <img className="john-pic" src={require('../images/summit-photos/edited/john-martin2.png')} alt="Portrait of Pastor John Martin" />
                           <div>
                              <h4>Pastor John Martin</h4>
                              <h5>Victorville First Assembly</h5>
                           </div>
                        </div>
                        <p>In 2006, Pastor John C. Martin moved to Victorville, California from Seattle, Washington to pastor Victorville First Assembly. In the almost 12 years that Pastor John has been pastoring at Victorville First Assembly, the church has expanded from one to ten campus locations. In addition, the church offers worship services in English, Spanish, Korean, Indonesian and American Sign Language. The church's ministries have more than doubled in number and currently include the Feed My Sheep Food Bank, a School of Ministry, and Victor Valley Christian School. Pastor John has a heart to reach people for Christ and to develop fully devoted followers of God! As witnessed in the growth and expansion of the ministries underneath his leadership, he knows he serves a Big God who is capable of more than we could think or imagine, and he chases after all that God has at full speed.</p>
                     </div>

                     <h4 className="breakout-title"><i>With Breakout Speakers Featuring:</i></h4>

                     {/* ===========================================================
                     =========================================================== */}

                     <SpeakerBio
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
                     />

                  </div>
               </div> {/* /.info-section */}

               <div className="description-container">
                  <h1>Breakout Sessions</h1>
                  <div className="description-list">

                     <BreakoutButton 
                        idName="richShepherdTalk"
                        speakerData={speakerData.shepherd}
                     />
                     <BreakoutButton
                        idName="billDogteromTalk"
                        speakerData={speakerData.dogterom}
                     />
                     <BreakoutButton
                        idName="joeMossTalk"
                        speakerData={speakerData.moss}
                     />
                     <BreakoutButton 
                        idName="ricardoQuintanaTalk"
                        speakerData={speakerData.quintana}
                     />
                     <BreakoutButton
                        idName="joannJohnsonTalk"
                        speakerData={speakerData.johnson}
                     />
                  </div>
               </div>

               {/* {this.state.richShepherdPopupIsShowing ? <BreakoutPopup
                  idName="richShepherdPopup"
                  speakerData={speakerData.shepherd}
               /> : <div />} */}

               {/* <BreakoutPopup
                  idName="richShepherdPopup"
                  speakerData={speakerData.shepherd}
               />
               <BreakoutPopup
                  idName="billDogteromPopup"
                  speakerData={speakerData.dogterom}
               />
               <BreakoutPopup
                  idName="joeMossPopup"
                  speakerData={speakerData.moss}
               />
               <BreakoutPopup
                  idName="ricardoQuintanaPopup"
                  speakerData={speakerData.quintana}
               />
               <BreakoutPopup
                  idName="joannJohnsonPopup"
                  speakerData={speakerData.johnson}
               /> */}

               <div id="richShepherdPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/rich-shepherd2.png" />
                        <h2>Rich Shepherd</h2>
                        <h1>Beyond Sunday</h1>
                        <h3>Making the Other 167 Hours in the Week Count</h3>
                     </div>
                     <p className="popup-body">
                        How do we, as pastors, ministry leaders, and church leaders help those who come through our doors on Sunday live out their Sunday experience the rest of the week? How do we engage them in spiritual growth in the day-to-day? While also keeping them engaged with upcoming events and connection points? And how do we let others in our city know that a great church exists just around the corner?<br />
                        Answer: <b>Online Systems & Social Media</b>! Don't let that intimidate or confuse you, because WE WANT TO HELP and provide you with some amazing tools! Come and we will not only provide you practical steps that anyone can do, but we will also push you towards free content that makes a huge impact!
                     </p>
                  </div>
               </div>

               <div id="billDogteromPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/dr-bill-dogterom2.png" />
                        <h1>Dr. Bill Dogterom</h1>
                        <h2>Beyond Spirital Barriers</h2>
                        <h3>Engaging Next-Gen in the Gifts of the Spirit</h3>
                     </div>
                     <p className="popup-body">
                        For classical Pentecostals, the manifestation of the gifts of the Spirit in a public worship environment is a mark of authenticity - but seems to be dwindling in frequency and relevance. This workshop will focus on ways of engaging and empowering Next-Gen pentecostals in the use of the Gifts of the Spirit in a way that builds up the Body of Christ.
                     </p>
                  </div>
               </div>
         
               <div id="joeMossPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/joe-moss2.png" />
                        <h1>Joe Moss</h1>
                        <h2>Beyond Limitations</h2>
                        <h3>Limited Resource does not Equal Limited Worship</h3>
                     </div>
                     <p className="popup-body">
                        We've all been there, the worship experience in a large room at mega churches or conferences is incredible. The band, the worship leader, the prop audio, lights, and production leave you feeling inspired to come back to your smaller church setting with fresh vigor. And then the harsh reality of limitation sets in again. "The space can't handle the stage volume." "We don't have a drummer that can play like that." "What about backing tracks?" "Where do I even begin?" We have all asked these questions. But, perhaps there's MORE that we can do for our small church worship setting by actually DOING LESS. Come find out!
                     </p>
                  </div>
               </div>
         
               <div id="ricardoQuintanaPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/ricardo-q2.png" />
                        <h1>Ricardo Quintana</h1>
                        <h2>Beyond Visual Barriers</h2>
                        <h3>WARM is the New WOW</h3>
                     </div>
                     <p className="popup-body">
                        In "WARM is the New WOW" we will discover that a simple coffee table host, a parking lot attendant, a greeter, an extra sign, a host no an announcement maker, and attention to children can grow your church faster than you can imagine. Today's families are looking for churches who genuinely love and care for them. "WARM is the New WOW" will discuss and example how was can WARM up our weekends and take the weight off the worship and message to be what brings people back.
                     </p>
                  </div>
               </div>
         
               <div id="joannJohnsonPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/joann-johnson2.png" />
                        <h1>JoAnn Johnson</h1>
                        <h2>Empowering Your Team</h2>
                        <h3>Do More by Doing Less</h3>
                     </div>
                     <p className="popup-body">
                        God has given you big dreams and ideas, but it takes a team to see those dreams become a reality. Discover ways to empower and lead your team. Stop trying to do everything yourself and do more by doing less.
                     </p>
                  </div>
               </div>
         
               <div className="schedule-section">
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
               </div>

               <div className="cost-section">
                  <h2>Cost To Attend</h2>
                  <h3>Prices For Next Year's Summit<br />
                  To Be Announced Soon!</h3>
               </div>

               <div className="register-section">
                  <div className="register-headline headline">
                     <h1>REGISTER</h1>
                     <div className="line white-line3"></div>
                  </div>
                  <div className="buttons">
                     <div className="btn btn1"><i>REGISTRATION DETAILS COMING SOON</i></div>
                  </div>
               </div>

               <p className="copy">&copy; SoCal Region 1 - 2018</p>
            </div>
         </PageContainer>
      );
   }
}

export default Summit;

export const aboutQuery = graphql`
	query {
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
