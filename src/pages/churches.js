import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Church from '../components/Church';
import Footer from '../components/Footer';

const ChurchesPageContainer = styled.div`
   margin: 0;
   text-align: center;
`;

const MainSection = styled.main`
   display: flex;
   justify-content: center;
   background-color: #D1D3D4;
   margin: 0;
   padding-top: 30px;
   padding-bottom: 30px;
   text-align: center;
   h1 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      letter-spacing: 3px;
   }
`;

const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   max-width: 1050px;
   margin: 10px auto;
   .county {
      background-color: #bbb;
      width: 300px;
      margin: 20px auto;
   }
   .page-head {
      font-size: 2.3em;
      text-transform: uppercase;
      padding: 15px;
      width: 90%;
      max-width: 650px;
      background-color: #8FD2D2;
      text-align: center;
      letter-spacing: 3px;
      margin-bottom: 50px;
   }
   @media (max-width: 480px) {
      width: 90%;
      .county {
         flex-direction: column;
      }
   }
`;

const ChurchList = styled.div`
   font-family: 'neuzeit-grotesk', 'sans-serif';
   h2 {
      font-size: 1.8em;
      letter-spacing: 3px;
   }
   .county {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
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
                  <h1 className="page-head">Connect with local churches in your area!</h1>
                  <ChurchList>
                     <h1>CHURCHES IN REGION 1</h1>

                     <h2>SLO County Churches</h2>
                     <div className="county">
                        {sloCountyChurches.map(({node}) => {
                           console.log(node.facebookPageURL);
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

                     <h2>Ventura County Churches</h2>
                     <div className="county">
                        {venturaCountyChurches.map(({ node }) => {
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

                     <h2>Santa Barbara County Churches</h2>
                     <div className="county">
                        {sbCountyChurches.map(({ node }) => {
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

                  </ChurchList>

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