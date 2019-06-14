import styled from 'styled-components';

const Container = styled.div`
   /* ==================
   This is the main base styles for the Annual Leadership Summit 2019. It includes things like font type, colors, images, etc.

   Your lovely web developer
      Jacob D. Castro
   ================== */

   background-color: #000;
   overflow: hidden;

   #sideNav {
      position: absolute;
      z-index: 10;
   }

   #pageContent {
      overflow: hidden;
   }

   #backgroundImg {
      position: absolute;
      top: -100px;
      left: 0;
      width: 10vw;
      z-index: 1;
      margin-top: -100px;
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
        MAIN HEADER STYLE
    ----------------------------*/
   /* ==================
    HEADER BANNER
    -------------------*/

   .header-content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 80px auto 0;
      width: 100vw;
      height: 300px;
      z-index: 2;
   }

   .headerDate {
      color: black;
      font-size: 5vw;
      letter-spacing: 3px;
      margin: 0px;
   }

   .headerLogo {
      position: relative;
      width: 90vw;
      height: auto;
   }

   .mtnLogo {
      position: relative;
      /* z-index: 1; */
      height: 20vw;
      width: auto;
      margin: 30px auto -5px;
   }

   .content-container {
      position: relative;
      z-index: 2;

      h1 {
         text-align: center;
         color: #000;
         margin: 0 auto;
         width: 90vw;
      }
      .description {
         width: 80vw;
         margin: 40px auto 20px;
         max-width: 830px;

         p,
         h1,
         h2,
         h3,
         h4,
         h5,
         h6 {
            color: black;
         }
      }

      .DTL {
         margin: 40px auto;
         h1 {
            font-size: 5.5vw;
            margin: 22px auto;
         }
      }

      .comingSoon {
         text-align: center;
         color: #000;
         margin: 0px auto 50px;
         width: 90vw;
      }
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

   @media (min-width: 450px) {
      .header-content {
         margin: 80px auto 0;
         width: 100vw;
         height: 300px;
         z-index: 2;
      }

      .headerDate {
         color: black;
         font-size: 1.6rem;
         letter-spacing: 3px;
         margin: 0px;
      }

      .headerLogo {
         position: relative;
         width: 430px;
         height: auto;
      }

      .mtnLogo {
         position: relative;
         /* z-index: 1; */
         height: auto;
         width: 140px;
         margin: 30px auto -5px;
      }

      .content-container {
         position: relative;
         z-index: 2;

         h1 {
            text-align: center;
            color: #000;
            margin: 0 auto;
            width: 90vw;
         }
         .description {
            width: 80vw;
            margin: 40px auto 20px;

            p,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
               color: black;
            }
         }

         .DTL {
            margin: 40px auto;
            h1 {
               font-size: 31px;
               margin: 22px auto;
            }
         }

         .comingSoon {
            text-align: center;
            color: #000;
            margin: 0px auto 50px;
            width: 90vw;
         }
      }
   }

   @media (min-width: 707px) {
      .header-content {
         margin: 170px auto 0;
         width: 100vw;
         height: 300px;
         z-index: 2;
      }

      .headerDate {
         color: black;
         font-size: 1.8rem;
         letter-spacing: 3px;
         margin: 0px;
      }

      .headerLogo {
         position: relative;
         width: 615px;
         height: auto;
      }

      .mtnLogo {
         position: relative;
         /* z-index: 1; */
         height: auto;
         width: 180px;
         margin: 30px auto -5px;
      }

      .content-container {
         margin-top: 60px;
         position: relative;
         z-index: 2;

         h1 {
            font-size: 2.7rem;
            text-align: center;
            color: #000;
            margin: 0 auto;
            width: 90vw;
         }
         .description {
            width: 80vw;
            margin: 54px auto;
            font-size: 1.2rem;
            text-align: center;

            p,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
               color: black;
            }
         }

         .DTL {
            margin: 55px auto;
            h1 {
               font-size: 38px;
               margin: 32px auto;
            }
         }

         .comingSoon {
            font-size: 2.65rem;
            text-align: center;
            color: #000;
            margin: 0px auto 80px;
            width: 90vw;
         }
      }
   }

   @media (min-width: 1024px) {
      .header-content {
         margin: 240px auto 0;
         width: 100vw;
         height: 300px;
         z-index: 2;
      }

      .headerDate {
         color: black;
         font-size: 2.5rem;
         letter-spacing: 16px;
         margin: 0px;
      }

      .headerLogo {
         position: relative;
         width: 815px;
         height: auto;
      }

      .mtnLogo {
         position: relative;
         /* z-index: 1; */
         height: auto;
         width: 200px;
         margin: 30px auto -5px;
      }

      .content-container {
         margin-top: 100px;
         position: relative;
         z-index: 2;

         h1 {
            font-size: 2.7rem;
            text-align: center;
            color: #000;
            margin: 0 auto;
            width: 90vw;
         }
         .description {
            width: 80vw;
            margin: 54px auto;
            font-size: 1.2rem;

            p,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
               color: black;
            }
         }

         .DTL {
            margin: 55px auto;
            h1 {
               font-size: 38px;
               margin: 32px auto;
            }
         }

         .comingSoon {
            font-size: 2.85rem;
            text-align: center;
            color: #000;
            margin: 0px auto 80px;
            width: 90vw;
         }
      }
   }
`;

export default Container;
