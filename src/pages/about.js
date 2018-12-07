import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import StaffMember from '../components/StaffMember';
import Footer from '../components/Footer';

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
      };
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
                  <div className="header-content">
                     <h1>WHO WE ARE</h1>
                  </div>
                  <a href="#down-arrow"><img alt="" id="down-arrow" src="../images/icons/down-arrow.png" /></a>
               </header>
            </div>
            <main>
               <div className="content-container">
                  <div className="story">
                     <h1>ABOUT US</h1>
                     <p>Region 1 is the churches, leaders, church-goers, and people who minister and live all throughout the Ventura, Santa Barbara, and San Luis Obispo counties. It is marked by incredible diversity, as we are culturally, ethnically, and economically diverse.</p>
                     <p>We are roughly 200 miles end to end, with 34 churches that range from approximately 30 to 1,800. We have a passionate desire to see our communities reached with the love of Jesus.</p>
                     <p>We are seeing our churches strengthened and resourced, watching as Jesus' Church united and works together. We are developing and praying for more pastors, planters, and people to partner with us in further reaching our region. We firmly believe that God has even greater things in store for Region 1 in the days and years to come!</p>
                  </div>

                  <div className="border"></div>

                  <div className="staff-list">
                     <h1>MEET THE REGIONAL LEADERSHIP TEAM (RLT)</h1>

                     {this.props.data.allContentfulStaffMember.edges.map(({node}) => {
                        return (
                           <StaffMember
                              name={node.name}
                              num={node.orderNum}
                           />
                        );
                     })}

                  </div>
               </div>
            </main>

            <Footer />
         </AboutContainer>
      );
   }
}

export default About;

export const query = graphql`
	query {
      allContentfulStaffMember {
         edges {
            node {
               orderNum
               name
               staffTitle
               portrait {
                  file {
                     url
                  }
               }
               biography {
                  biography
               }
               email
               phone
               staffMemberChurch {
                  churchName
                  streetAddress
                  city
               }
            }
         }
      }
   }
`;
