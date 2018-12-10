import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const EventsContainer = styled.div`
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

class Events extends React.Component {
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
         <EventsContainer>
            <Head title="Events - SoCal Region 1" />
            <SideNav action={this.closeMobileNav} open={this.state.mobileNavIsOpen} />
            <Navbar action={this.openMobileNav} mobileNavIsOpen={this.state.mobileNavIsOpen} />
            <PageHeader headline="EVENTS" className="eventsPage" />
            <MainSection>
               <ContentContainer>
                  <h1>Check out our upcoming events!</h1>

                  {/* <Event /> */}

               </ContentContainer>
            </MainSection>

            <Footer />
         </EventsContainer>
      );
   }
}

export default Events;

// export const aboutQuery = graphql`
// 	query {
       
//    }
// `;
