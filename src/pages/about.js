import React from 'react';
// import { graphql } from 'gatsby';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';

const AboutContainer = styled.div`
   margin: 0;
`;


class About extends React.Component {
   constructor(props) {
      super(props);

      this.openMobileNav = this.openMobileNav.bind(this);
      this.closeMobileNav = this.closeMobileNav.bind(this);

      this.state = {
         mobileNavIsOpen: false
      }
   }

   openMobileNav() {
      this.setState({
         mobileNavIsOpen: true
      })
   }

   closeMobileNav() {
      this.setState({
         mobileNavIsOpen: false
      })
   }
   
   render() {
      return (
         <AboutContainer>
            <Head title="About Us - SoCal Region 1" />
            <SideNav action={this.closeMobileNav} open={this.state.mobileNavIsOpen} />
            <Navbar action={this.openMobileNav} mobileNavIsOpen={this.state.mobileNavIsOpen} />
            <div>
               <header id="header">
                  <div class="header-content">
                     <h1>WHO WE ARE</h1>
                  </div>
                  <a href="#down-arrow"><img alt="" id="down-arrow" src="../images/icons/down-arrow.png" /></a>
               </header>
            </div>
            <main>
               <div class="content-container">
                  <div class="story">
                     <h1>ABOUT US</h1>
                     <p>Region 1 is the churches, leaders, church-goers, and people who minister and live all throughout the Ventura, Santa Barbara, and San Luis Obispo counties. It is marked by incredible diversity, as we are culturally, ethnically, and economically diverse.</p>
                     <p>We are roughly 200 miles end to end, with 34 churches that range from approximately 30 to 1,800. We have a passionate desire to see our communities reached with the love of Jesus.</p>
                     <p>We are seeing our churches strengthened and resourced, watching as Jesus' Church united and works together. We are developing and praying for more pastors, planters, and people to partner with us in further reaching our region. We firmly believe that God has even greater things in store for Region 1 in the days and years to come!</p>
                  </div>

                  <div class="border"></div>

                  <div class="staff-list">
                     <h1>MEET THE TEAM REGIONAL LEADERSHIP TEAM (RLT)</h1>

                     <div class="person">
                        <div class="photo-div">
                           <img alt="" class="photo" src="../images/staff/Ted-Pugh.jpg" />
                        </div>
                        <div class="title-div">
                           <h1>Ted Pugh</h1>
                           <h3>Executive Presbyter</h3>
                        </div>
                        <div class="bio-div">
                           <p>"God called me to pastoral ministry when I was in my early 20's. The core of my call has been two-fold: first, to see people come to faith, be discipled, and grow their faith. Secondly, to help develop and equip pastors and leaders. It is amazing because being the lead pastor at Ventura First Assembly and Executive Presbyter (EP) for Region 1, I have the privilege of fulfilling both aspects of God's call on my life in some incredible ways. I love the opportunities I have as the EP to invest and come alongside pastors and leaders throughout our Region. I have a passion for Region 1 and I am excited to see all that God continues to do in our Region!"</p>
                        </div>
                        <div class="staff-contact">
                           <div class="contact-left">
                              <p><strong>Ventura First Assembly</strong><br />
                                 346 N. Kimball Rd.<br />
                              Ventura, CA 93004<br />
                              <i>Asst: Tiffany Pugh</i></p>
                           </div>
                           <div class="contact-right">
                              <p><b>Phone:</b> (805) 647-2004<br />
                              <b>Email:</b> socalregion1@gmail.com</p>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
            </main>
         </AboutContainer>
      );
   }
}

export default About;

// export const query = graphql`
// 	query {
// 		allContentfulStaffMembers {

//       }
// 	}
// `;
