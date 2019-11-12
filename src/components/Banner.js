import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BannerContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100vw;
   @media (min-width: 1024px) {
      flex-direction: ${props => (props.primary ? 'row' : 'row-reverse')};
   }

   .bannerTitle {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      position: relative;
      margin: 0px;
      padding: 0px;
      height: 245px;
      width: 100vw;
      color: #fff;
      text-align: center;
      font-size: 3em;
      letter-spacing: 10px;
      text-align: center;
      object-fit: cover;
      overflow: hidden;

      .headlineContainer {
         height: 245px;
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         position: absolute;
         top: 0;
         z-index: 1;
         background-color: rgba(0, 0, 0, 0.3);
         h2 {
            /* position: relative; */
            /* height: 245px; */
            margin: auto;
            z-index: 2;
         }
      }
   }

   .bannerContent {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      font-weight: 700;
      text-transform: uppercase;
      height: 200px;
      width: 100vw;
      background-color: #d1d3d4;
      p {
         font-family: 'neuzeit-grotesk', 'sans-serif';
         margin: 5px;
         padding: 5px;
         background-color: #d1d3d4;
      }
      a:visited,
      a:active {
         font-family: 'neuzeit-grotesk', 'sans-serif';
         text-decoration: none;
      }
      a {
         text-decoration: none;
         button {
            font-family: 'neuzeit-grotesk', 'sans-serif';
            margin-top: -30px;
            padding: 15px;
            background-color: #777;
            color: #fff;
            font-size: 1.1em;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: none;
         }
         button:hover {
            cursor: pointer;
            background-color: #5e9ea2;
            transition: 380ms;
         }
      }
   }

   @media (min-width: 724px) {
      .bannerTitle {
         .headlineContainer {
            font-size: 3.75rem;
            letter-spacing: 12px;
         }
      }
      .bannerContent {
         p {
            font-size: 1.35em;
            letter-spacing: 5px;
         }
      }
   }

   @media (min-width: 1024px) {
      height: 285px;
      .bannerTitle {
         height: 285px;
         width: 60vw;
         /* flex-grow: 1; */
         .headlineContainer {
            height: 285px;
         }
      }
      .bannerContent {
         height: 285px;
         /* height: 245px; */
         width: 40vw;
         /* flex-shrink: 2; */
      }
   }

   @media (min-width: 1500px) {
      height: 350px;
      .bannerTitle {
         height: 350px;
         .headlineContainer {
            height: 350px;
         }
      }
      .bannerContent {
         height: 350px;
      }
   }
`;

class Banner extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         windowWidth: 0,
      };
   }

   componentDidMount() {
      this.setState({ windowWidth: window.innerWidth });
      window.addEventListener('resize', () => {
         let w = window.innerWidth;
         this.setState({ windowWidth: w });
      });
   }

   render() {
      let imgMargin;
      let { windowWidth } = this.state;

      if (windowWidth < 480) {
         imgMargin = '-90px';
      } else if (windowWidth > 1400) {
         imgMargin = '-180px';
      } else if (windowWidth > 1023) {
         imgMargin = '-120px';
      } else if (windowWidth >= 480) {
         imgMargin = '-100px';
      }
      return (
         <BannerContainer primary={this.props.primary}>
            <div className="bannerTitle">
               <Img
                  style={{
                     objectFit: 'cover',
                     objectPosition: 'center center',
                     marginTop: imgMargin,
                     minHeight: '365px',
                  }}
                  imgStyle={{
                     zIndex: '-1',
                     objectFit: 'cover',
                     objectPosition: 'center top',
                     minHeight: '245px',
                  }}
                  fluid={this.props.bgImg.fluid}
               />

               <div className="headlineContainer">
                  <h2>{this.props.headline.toUpperCase()}</h2>
               </div>
            </div>

            <div className="bannerContent">
               {this.props.paragraph}
               <Link to={this.props.toPage}>
                  <button>See {this.props.headline.toUpperCase()}</button>
               </Link>
            </div>
         </BannerContainer>
      );
   }
}

export default Banner;
