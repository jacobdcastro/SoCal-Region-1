import React from 'react';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Church from '../components/Church';
import Footer from '../components/Footer';

const ChurchesPageContainer = styled.div`
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

class Churches extends React.Component {
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

      // console.log(this.props.data.allContentfulChurch.edges[0].node);

      const sloCountyChurches = this.props.data.allContentfulChurch.edges.filter(church => church.node.county[0] === 'San Luis Obispo');
      const venturaCountyChurches = this.props.data.allContentfulChurch.edges.filter(church => church.node.county[0] === 'Ventura');
      const sbCountyChurches = this.props.data.allContentfulChurch.edges.filter(church => church.node.county[0] === 'Santa Barbara');

      console.log(sloCountyChurches);
      console.log(venturaCountyChurches);
      console.log(sbCountyChurches);

      return (
         <ChurchesPageContainer>
            <Head title="Churches - Socal Region 1" />
            <SideNav action={this.closeMobileNav} open={this.state.mobileNavIsOpen} />
            <Navbar action={this.openMobileNav} mobileNavIsOpen={this.state.mobileNavIsOpen} />
            <PageHeader headline="CHURCHES" className="churchesPage" />

            <MainSection>
               <ContentContainer>
                  <h1 class="page-head">Connect with local churches in your area!</h1>
                  <div class="churchlist">
                     <h1>CHURCHES IN REGION 1</h1>

                     {sloCountyChurches.map(({node}) => {
                        console.log(node);
                        return (
                           <Church 
                              churchName={node.churchName}
                              streetAddress={node.streetAddress}
                              city={node.city}
                              zipCode={node.zipCode}
                              county={node.county}
                              phoneNumber={node.phoneNumber}
                              website={node.churchWebsite}
                              facebook={node.facebookPageURL}
                           />
                        );
                     })}
                     <p>hi===========================================================</p>
                     {venturaCountyChurches.map(({ node }) => {
                        console.log(node);
                        return (
                           <Church
                              churchName={node.churchName}
                              streetAddress={node.streetAddress}
                              city={node.city}
                              zipCode={node.zipCode}
                              county={node.county}
                              phoneNumber={node.phoneNumber}
                              website={node.churchWebsite}
                              facebook={node.facebookPageURL}
                           />
                        );
                     })}
                     <p>hi===========================================================</p>
                     {sbCountyChurches.map(({ node }) => {
                        console.log(node);
                        return (
                           <Church
                              churchName={node.churchName}
                              streetAddress={node.streetAddress}
                              city={node.city}
                              zipCode={node.zipCode}
                              county={node.county}
                              phoneNumber={node.phoneNumber}
                              website={node.churchWebsite}
                              facebook={node.facebookPageURL}
                           />
                        );
                     })}

                  </div>

                  <div class="border"></div>

                  <h2 class="county-headline">SAN LUIS OBISPO COUNTY</h2>
                  <div class="city arroyo-grande">
                     <h2>Arroyo Grande</h2>
                  </div>
               </ContentContainer>
            </MainSection>

            <Footer />
         </ChurchesPageContainer>
      );
   }
}

export default Churches;

export const churchesQuery = graphql`
   query {
      allContentfulChurch {
         edges {
            node {
            churchName
            streetAddress
            city
            zipCode
            county
            phoneNumber
            churchWebsite
            facebookPageURL
            }
         }
      }
   }
`;