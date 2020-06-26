import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Event from '../components/Event';
import Footer from '../components/Footer';

// video player imports
import { Player } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';

const EventsContainer = styled.div`
  margin: 0;
`;

const MainSection = styled.main`
  display: flex;
  justify-content: center;
  background-color: #d1d3d4;
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

  .embed-container {
    --video--width: 1296;
    --video--height: 540;

    position: relative;
    padding-bottom: calc(
      var(--video--height) / var(--video--width) * 100%
    ); /* 41.66666667% */
    overflow: hidden;
    max-width: 100%;
    background: transparent;
  }

  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.openMobileNav = this.openMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
    this.state = {
      mobileNavIsOpen: false,
    };
  }

  openMobileNav() {
    this.setState({
      mobileNavIsOpen: true,
    });
  }

  closeMobileNav() {
    this.setState({
      mobileNavIsOpen: false,
    });
  }

  render() {
    return (
      <EventsContainer>
        <Head title="Videos - SoCal Region 1" />
        <SideNav
          action={this.closeMobileNav}
          open={this.state.mobileNavIsOpen}
        />
        <Navbar
          action={this.openMobileNav}
          mobileNavIsOpen={this.state.mobileNavIsOpen}
        />
        <PageHeader headline="VIDEOS" className="videosPage" />
        <MainSection>
          <ContentContainer>
            <h1>A Conversation About Racism</h1>
            <div className="embed-container">
              <iframe
                className="videoPlayer"
                src="https://player.vimeo.com/video/432674465"
                // width="640"
                // height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              />
            </div>
            {/* <Player
              src="blob:https://vimeo.com/23b7f650-5d60-43da-a612-df5499bf85f7"
              poster={RacismPoster}
            /> */}
          </ContentContainer>
        </MainSection>

        <Footer />
      </EventsContainer>
    );
  }
}

export default Videos;

export const videosQuery = graphql`
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
