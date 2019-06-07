import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Head from '../utils/Helmet';
import PageContainer from '../components/summit/SummitPageContainer';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';

class Summit extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         mobileNavIsOpen: false
      };
   }

   openMobileNav() {
      this.setState({ mobileNavIsOpen: true });
   }
   closeMobileNav() {
      this.setState({ mobileNavIsOpen: false });
   }

   render() {
      return (
         <PageContainer>
            <Head title='Annual Leadership Summit' />

            <Img />

            <header>
               <SideNav
                  id='sideNav'
                  action={this.closeMobileNav}
                  open={this.state.mobileNavIsOpen}
               />
               <Navbar
                  action={this.openMobileNav}
                  mobileNavIsOpen={this.state.mobileNavIsOpen}
                  transparentBG
               />

               <div className='header-content' />
            </header>
            <div className='content-container'>
               <div />
            </div>
         </PageContainer>
      );
   }
}

export default Summit;

export const SUMMIT_2019_QUERY = graphql`
   query SUMMIT_2019_QUERY {
      contentfulAnnualLeadershipSummit2019(
         id: { eq: "fdded862-ca04-5557-be09-95595a77103b" }
      ) {
         id
         themeTitle
         dateOfEvent
         locationOfEvent
         speaker {
            id
            titleOfList
         }
      }

      # file(relativePath: { eq: "./2019-summit-images/"} )
   }
`;
