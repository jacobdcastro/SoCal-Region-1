import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Event from '../components/Event';
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
      console.log(this.props.data.contentfulEventsList.events);
      return (
         <EventsContainer>
            <Head title="Events - SoCal Region 1" />
            <SideNav action={this.closeMobileNav} open={this.state.mobileNavIsOpen} />
            <Navbar action={this.openMobileNav} mobileNavIsOpen={this.state.mobileNavIsOpen} />
            <PageHeader headline="EVENTS" className="eventsPage" />
            <MainSection>
               <ContentContainer>
                  <h1>Check out our upcoming events!</h1>

                  {this.props.data.contentfulEventsList.events.map((event) => {
                     console.log(event.eventTitle);
                     return (
                        <Event
                           eventTitle={event.eventTitle} 
                           eventPhoto={event.eventPhoto.file.url}
                           desc={event.description.content[0].content[0].value}
                           dates={event.eventDates.content[0].content[0].value}
                        />
                     );
                  })}

               </ContentContainer>
            </MainSection>

            <Footer />
         </EventsContainer>
      );
   }
}

export default Events;

export const aboutQuery = graphql`
	query {
      contentfulEventsList {
         doNotEditThisField
         events {
            eventTitle
            eventPhoto {
               file {
                  url
               }
            }
            description {
               content {
                  content {
                     value
                  }
               }
            }
            eventDates {
                content {
                  content {
                     value
                  }
               }
            }
         }
      } 
   }
`;
