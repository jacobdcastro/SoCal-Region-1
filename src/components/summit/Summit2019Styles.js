import styled from 'styled-components';
import manNightMainImg from '../../images/summit-photos/man-night-main.jpg';
import spaceImg from '../../images/summit-photos/space-image.jpg';

const PageContainer = styled.div`
   /* ==================
  This is the main base styles for the SoCal Region 1 Website. It includes things like font type, colors, images, etc.

  Your lovely web developer
    Jacob D. Castro
   ================== */

   #sideNav {
      z-index: 5;
   }

   /*=== FONT STYLING ===*/
   h1,
   h2,
   h3,
   h4,
   h5,
   h6,
   p,
   a,
   li {
      font-family: 'neuzeit-grotesk', sans-serif;
      font-style: normal;
      color: white;
   }
   .header-content h1,
   .schedule-section h1 {
      font-family: 'Economica', sans-serif;
   }
   .header-content h3,
   .schedule h4 {
      font-family: 'Prata', serif;
   }
   p {
      letter-spacing: 1.75px;
   }

   /* ===========================
        NAVIGATION BAR STYLE
    ----------------------------*/

   .navbar {
      margin: 0;
      padding: 0;
      width: 100%;
   }

   .header-logo {
      height: 100px;
      width: auto;
      margin: 0;
      padding: 0;
   }

   .rightnav {
      height: 125px;
      width: 50%;
      margin: 0;
      padding: 18px 0;
   }

   .rightnav a {
      float: right;
      display: block;
      color: white;
      text-decoration: none;
      font-weight: 700;
      letter-spacing: 3px;
      padding: 15px 15px 4px;
      margin: 5px;
      border-bottom: solid 2px rgba(0, 0, 0, 0);
   }
   .rightnav a:hover {
      border-bottom: solid 2px white;
      transition: 350ms;
   }

   /* ===========================
        MAIN HEADER STYLE
    ----------------------------*/

   header {
      background-color: white;
      background-size: cover;
      background-position: bottom;
      margin: 0px;
      height: 425px;
      color: #fff;
      width: 100%;
      padding: 0;
   }

   /* ==================
    NAVIGATION BAR
    -------------------*/

   .navbar {
      display: flex;
      flex-direction: row;
      align-items: center;
   }

   .rightnav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
   }

   /* ==================
    HEADER BANNER
    -------------------*/

   header,
   .header-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .header-content {
      flex-grow: 1;
   }

   @media (min-width: 724px) {
      .navbar {
         flex-direction: row;
         justify-content: space-around;
      }

      .rightnav {
         flex-direction: row;
      }
   }

   @media (min-width: 480px) {
   }

   @media (min-width: 724px) {
      #mobileNav {
         display: none;
      }

      /* ==================
      NAVIGATION BAR
      -------------------*/
      .navbar {
         height: 225px;
      }
      .header-logo {
         height: 125px;
      }
      .rightnav {
         width: auto;
      }

      .header-logo {
         height: 90px;
      }

      #fullNav {
         height: 100px;
         width: 100%;
      }

      .rightnav a {
         font-size: 0.85em;
         padding: 10px;
      }
   }

   @media (min-width: 1000px) {
      /* ==================
      NAVIGATION BAR
      -------------------*/
      .navbar {
         height: 100px;
      }

      .header-logo {
         height: 125px;
      }
      .rightnav {
         width: auto;
      }

      .header-logo {
         height: 90px;
      }

      #fullNav {
         height: 100px;
         width: 100%;
      }

      .rightnav a {
         font-size: 1.1em;
         padding: 14px;
      }

      @media (min-width: 1024px) {
      }
   }
`;

export default PageContainer;
