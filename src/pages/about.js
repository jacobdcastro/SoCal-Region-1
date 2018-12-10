import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import StaffMember from '../components/StaffMember';
import Footer from '../components/Footer';

const AboutContainer = styled.div`
   margin: 0;
`;

const MainSection = styled.main`
   display: flex;
   justify-content: center;
   background-color: #D1D3D4;
   margin: 0;
   padding-top: 30px;
   padding-bottom: 30px;
   h1 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      letter-spacing: 3px;
   }
`;

const ContentContainer = styled.div`
   width: 80%;
   max-width: 1050px;
   @media (max-width: 480px) {
      width: 90%;
   }
`;

const Story = styled.div`
   font-family: 'neuzeit-grotesk', 'sans-serif';
   padding-bottom: 35px;
   margin-top: 25px;
   font-size: 1.15em;
   letter-spacing: .5px;
`;

const Border = styled.div`
   height: 4.5px;
   width: 38%;
   background-color: #181818;
   margin: 0 auto;
   margin-bottom: 25px;
`;

const StaffListContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
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
            <PageHeader headline="WHO WE ARE" className="aboutPage" />
            
            <MainSection>
               <ContentContainer>
                  <Story>
                     <h1>ABOUT US</h1>
                     <p>Region 1 is the churches, leaders, church-goers, and people who minister and live all throughout the Ventura, Santa Barbara, and San Luis Obispo counties. It is marked by incredible diversity, as we are culturally, ethnically, and economically diverse.</p>
                     <p>We are roughly 200 miles end to end, with 34 churches that range from approximately 30 to 1,800. We have a passionate desire to see our communities reached with the love of Jesus.</p>
                     <p>We are seeing our churches strengthened and resourced, watching as Jesus' Church united and works together. We are developing and praying for more pastors, planters, and people to partner with us in further reaching our region. We firmly believe that God has even greater things in store for Region 1 in the days and years to come!</p>
                  </Story>

                  <Border />

                  <StaffListContainer className="staff-list">
                     <h1>MEET THE REGIONAL LEADERSHIP TEAM (RLT)</h1>

                     {this.props.data.allContentfulStaffMemberList.edges[0].node.staffMemberList.map((staffMember) => {
                        {/* console.log(staffMember); */}
                        return (
                           <StaffMember
                              name={staffMember.name}
                              title={staffMember.staffTitle}
                              photoURL={staffMember.portrait.file.url}
                              bio={staffMember.biography.content[0].content[0].value}
                              email={staffMember.email}
                              phone={staffMember.phone}
                              miscInfo={staffMember.miscellaneousInfo}
                              church={staffMember.staffMemberChurch}
                           />
                        );
                     })}

                  </StaffListContainer>
               </ContentContainer>
            </MainSection>

            <Footer />
         </AboutContainer>
      );
   }
}

export default About;

export const aboutQuery = graphql`
	query {
      allContentfulStaffMemberList {
         edges {
            node {
               doNotEditThisField
               staffMemberList {
                  name
                  staffTitle
                  email
                  phone
                  miscellaneousInfo
                  portrait {
                     file {
                        url
                     }
                  }
                  biography {
                     content {
                        content {
                           value
                           nodeType
                        }
                     }
                  }
                  staffMemberChurch {
                     churchName
                     streetAddress
                     city
                     zipCode
                  }
               }
            }
         }
      } 
   }
`;
