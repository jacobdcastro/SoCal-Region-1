import styled from 'styled-components';
import manNightMainImg from '../../images/summit-photos/man-night-main.jpg';
import manNightTallImg from '../../images/summit-photos/man-under-stars-tall.jpg';
import spaceImg from '../../images/summit-photos/space-image.jpg';

console.log(manNightTallImg);

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
  border-bottom: solid 2px rgba(0,0,0,0);
}
.rightnav a:hover {
  border-bottom: solid 2px white;
  transition: 350ms;
}


/* ===========================
        MAIN HEADER STYLE
    ----------------------------*/

header {
  background-image: url(${manNightMainImg});
  background-size: cover;
  background-position: bottom;
  margin: 0px;
  height: 575px;
  color: #fff;
  width: 100%;
  padding: 0;
}

.header-content {
  width: 100%;
  text-align: center;
}

.header-content h3 {
  position: absolute;
  top: 17em;
  right: 0;
  font-size: .9em;
  letter-spacing: 10px;
  margin: 0px auto;
  padding: 0px 8px;
  text-align: center;
  text-shadow: 4px 9px 14px #040404;
}

.header-content h1 {
  top: 25em;
  font-size: 3em;
  letter-spacing: 10px;
  margin: 20px auto;
  text-align: center;
  text-shadow: 4px 9px 14px #040404;
  z-index: 0;
}

.header-content h3 {
  font-size: .8em;
  letter-spacing: 10px;
  margin: 5px auto;
  text-align: center;
}

.header-content h1 {
  font-size: 5em;
  font-weight: 700;
  letter-spacing: 10px;
  margin: 8px auto;
}
.white-line1 {
  top: 3.25em;
  height: 7px;
}
.white-line2 {
  top: 43px;
  height: 4px;
}
.white-line3 {
  top: 45px;
  height: 4px;
}


.line {
  position: absolute;
  z-index: 0;
  width: 100%;
  background-color: #fff;
}

.headline {
  width: 100%;
}

.beyond-headline {
  text-align: center;
  position: absolute;
}

.content-container {
  background-color: #040404;
  margin: 0;
  z-index: 0;
	text-align: center;
  padding: 0px;
	padding-bottom: 12px;
}


.summary {
  text-align: center;
}

.summary p {
  font-size: .9em;
  margin: 0px auto;
  padding: 20px 5%;
  max-width: 900px;
}

.summary h5 {
  font-size: 1.68em;
  letter-spacing: 4px;
  margin: 8px auto;
}

.photo-section {
	text-align: center;
	margin: 50px auto;
	width: 90%;
  max-width: 1125px;
}
.photo-gallery {
	margin: 15px auto;
	padding: 2px auto;
	text-align: center;
}

.summit-photo {
	height: 175px;
	width: auto;
	padding: 5px;
	transition: 0.5s;
}
.summit-photo:hover {
	transform: scale(1.08, 1.08);
}

.full-image-popup {
	display: none;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,0.5);
}
.summit-photo-lg {
	width: 90%;
	height: auto;
}

.dtl div {
  margin: 25px;
}
.dtl div h4 {
  font-size: 1.5em;
  margin: 3.5px;
  color: #fff;
}
.dtl div p {
  font-size: 1.2em;
  margin: 3.5px;
  color: #fff;
}

.john-pic {
  height: 125px;
  width: 125px;
  margin: 8px auto;
}
.john-title div h4,
.john-title div h5 {
  text-align: center;
}
.john-title div h4 {
  font-size: 1.9em;
  letter-spacing: 3px;
  margin: 15px auto 18px;
}
.john-title div h5 {
  font-size: 1.3em;
  letter-spacing: 2.5px;
}
.john-martin p {
  font-size: 1em;
  text-align: center;
  letter-spacing: 3px;
  margin: 15px auto auto;
  width: 90%;
}

.speakers {
  margin: 15px auto;
  width: 90%;
  max-width: 800px;
}

.speakers h3 {
  font-size: 1.8em;
  letter-spacing: 3px;
  text-align: center;
  margin: 12px auto;
}

/* ====================
.speaker styles go here */
.speakers h5 {
  font-size: 1.6em;
  letter-spacing: 3px;
  margin: 8px auto;
}

.speakers ul {
  margin: 5px auto;
}

/* ====================================== */

.schedule-section {
  z-index: 0;
  text-align: center;
  background: linear-gradient(#040404, rgba(0, 0, 0, 0.1), #040404), url(${spaceImg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 750px;
}

.schedule-headline {
  margin-top: 70px;
  position: relative;
}

.schedule-headline h1 {
  font-size: 2.8em;
  letter-spacing: 10px;
  margin: 20px auto;
  text-align: center;
  text-shadow: 4px 9px 14px #040404;
  z-index: 1;
}
.white-line2 {
  z-index: 0;
}

.schedule-section {
  /* position: absolute; */
}

.schedule {
  margin: 15px auto;
}

.schedule h4 {
  letter-spacing: 6px;
  font-weight: 400;
  text-shadow: 4px 6px 9px #040404
}

.circle {
  background-color: #fff;
  height: 14px;
  width: 14px;
  border-radius: 100%;
  margin: auto;
  box-shadow: 4px 6px 20px #040404;
}


/* =============================== */

.description-container h1 {
  font-size: 1.8em;
  margin: 12px auto;
  text-align: center;
}

.description-list {
  width: 90%;
  max-width: 1024px;
}

.description-card {
  height: 125px;
  width: 165px;
  background-color: #444;
  border: none;
  border-radius: 9px;
  border-bottom: solid 5px #222;
  margin: 15px;
}
.description-card h2 {
  font-size: 1.0em;
  margin-bottom: 15px;
}
.description-card h3 {
  font-size: 1.1em;
  text-decoration: underline;
  padding: 8px auto;
}
.description-card p {
  font-size: .8em;
  margin: 4px;
  padding: 2px;
}
.description-card:hover {
  cursor: pointer;
}

.description-card h2,
.description-card h3,
.description-card h6 {
  margin: 0px;
  padding: 0px;
}


/* =============================== */

.cost-section {
  text-align: center;
}

.cost-section h2 {
  font-size: 1.8em;
  letter-spacing: 4px;
}




/* =============================== */

.register-section {
  z-index: 0;
  background: linear-gradient(#040404, rgba(0, 0, 0, 0.001), #040404), url(${manNightMainImg});
  background-position: bottom;
  background-size: cover;
  width: 100%;
  height: 550px;
}

.register-headline {
  position: relative;
  margin-top: 52px;
}

.register-section h1 {
  font-family: 'Economica', sans-serif;
  font-size: 3em;
  letter-spacing: 10px;
  margin: 20px auto;
  text-align: center;
  text-shadow: 4px 9px 14px #040404;
  z-index: 2;
}

.buttons {
  margin-top: 20px;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 3px;
  color: white;
  border-radius: 15px;
  padding: 20px 28px;
  margin: 10px 15px;
}
.buttons a{
  text-decoration: none;
}
.btn1 {
  border: solid 3px white;
}
.btn2 {
  background-color: #096683;
  border: solid 3px #096683;
}

.btn1:hover {
  cursor: pointer;
  background-color: #096683;
  border: solid 3px #096683;
  transition: 300ms;
}
.btn2:hover {
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  border: solid 3px #fff;
  transition: 300ms;
}
.btn1:hover,
.btn2:hover {
 cursor: no-drop;
}

.copy {
  font-size: 14px;
  text-align: center;
  margin: 0 auto 12px;
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

header, .header-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-content {
  flex-grow: 1;
}

.headline {
  display: flex;
}

.photo-section {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.photo-gallery {
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
}

.john-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.speakers {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.speaker-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.schedule-section,
.schedule {
  display: flex;
  flex-direction: column;
}

.register-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description-list {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

}

.popup {
  justify-content: center;
  align-items: center;
}

.popup-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description-list {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}




@media (min-width:724px) {
  .navbar {
    flex-direction: row;
    justify-content: space-around;
  }

  .rightnav {
    flex-direction: row;
  }

  .buttons {
    flex-direction: row;
  }
}


@media (min-width: 1024px) {
  .navbar {
    flex-direction: row;
    justify-content: space-around;
  }
  .banner2,
  .banner4 {
    flex-direction: row-reverse;
  }
  .banner3,
  .banner5 {
    flex-direction: row;
  }

  .container {
    flex-direction: row;
  }
}

/*  */

@media (min-width: 480px) {

  .header-content {
    margin-bottom: 40px;
  }

  .beyond-headline h1 {
    font-size: 7.5em;
  }
  .header-content h3 {
    position: static;
    margin: 5px auto 12em;
    font-size: 1em;
    top: 3em;
  }

  .white-line1 {
    height: 10px;
    top: 4.66em;
  }

  .summary p,
  .john-title p {
    font-size: 18px;
    letter-spacing: 3px;
  }
  .summary h5 {
    font-size: 2em;
    letter-spacing: 8px;
  }

  .dtl div h4 {
    font-size: 1.75em;
  }
  .dtl div p {
    font-size: 24px;
  }

  .speakers h3 {
    font-size: 2em;
  }

  .john-pic {
    height: 190px;
    width: 190px;
  }

  .john-title div h4 {
    font-size: 2.2em;
  }
  .john-title div h5 {
    font-size: 1.5em;
  }



  .schedule-section {
    height: 900px;
  }

  .schedule-headline h1 {
    font-size: 5em;
  }
  .white-line2 {
    top: 64px;
    height: 4.5px;
  }

  .schedule h4 {
    font-size: 1.3em;
  }

  .circle {
    height: 14px;
    width: 14px;
  }

  .cost-section h2 {
    font-size: 2.35em;
  }
  .cost-section h3 {
    font-size: 1.35em;
  }

  .register-section {
    background-position: bottom;
    background-size: cover;
    height: 550px;
  }

  .register-headline h1 {
    font-size: 5em;
  }
  .white-line3 {
    top: 64px;
    height: 5px;
  }

}

@media (min-width: 560px) {
  .dtl {
    margin: 20px auto;
  }
  .speakers {
    width: 80%;
  }
  .speaker-title {
    height: 65px;
  }
  .john-pic {
    height: 190px;
    width: 190px;
  }

  .description-list {
    width: 85%;
  }
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
    font-size: .85em;
    padding: 10px;
  }

  /* ======================= */

  header {
    height: 700px;
  }

  .header-content {
    margin-bottom: 80px;
  }

  .beyond-headline h1 {
    font-size: 8em;
  }
  .header-content h3 {
    position: static;
    margin: 5px auto 12em;
    font-size: 1.15em;
    top: 3em;
  }

  .white-line1 {
    height: 10px;
    top: 4.8em;
  }

  .summary p,
  .bio {
    font-size: 18px;
    letter-spacing: 3px;
  }
  .summary h5 {
    font-size: 2em;
    letter-spacing: 8px;
  }

  .dtl div h4 {
    font-size: 1.75em;
  }
  .dtl div p {
    font-size: 24px;
  }

  .john-pic {
    height: 250px;
    width: 250px;
  }

  .john-martin p {
    font-size: 18px;
  }

  .breakout-title {
    font-size: 1.72em;
  }
  .speakers {
    width: 80%;
  }

  .schedule-section {
    height: 1000px;
  }

  .schedule-headline h1 {
    font-size: 6em;
  }
  .white-line2 {
    top: 78px;
    height: 6px;
  }

  .schedule h4 {
    font-size: 1.42em;
  }

  .circle {
    height: 17px;
    width: 17px;
  }

  .cost-section h2 {
    font-size: 2.47em;
  }
  .cost-section h3 {
    font-size: 1.35em;
  }

  .register-section {
    background: linear-gradient(#040404, rgba(0, 0, 0, 0.001), #040404), url(${manNightMainImg});
    background-position: bottom;
    background-size: cover;
    height: 520px;
  }

  .register-headline h1 {
    font-size: 6em;
  }
  .white-line3 {
    top: 73px;
    height: 6px;
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



  /* =========================
      MAIN HEADER STYLE
      ------------------------*/

      header {
        height: 750px;
      }

      .header-content {
        margin-bottom: 120px;
      }

      .summary p,
      .john-title p {
        font-size: 18px;
        letter-spacing: 3px;
      }
      .summary h5 {
        font-size: 2em;
        letter-spacing: 8px;
      }

      .dtl div h4 {
        font-size: 1.75em;
      }
      .dtl div p {
        font-size: 24px;
      }

      .schedule-headline h1 {
        font-size: 6em;
      }
      .white-line2 {
        top: 78px;
        height: 6px;
      }

      .schedule h4 {
        font-size: 1.42em;
      }

      .circle {
        height: 17px;
        width: 17px;
      }

      .cost-section h2 {
        font-size: 2.47em;
      }
      .cost-section h3 {
        font-size: 1.35em;
      }

      .register-section {
        background: linear-gradient(#040404, rgba(0, 0, 0, 0.001), #040404), url(${manNightMainImg});
        background-position: bottom;
        background-size: cover;
        height: 600px;
      }

      .register-headline h1 {
        font-size: 6em;
      }
      .white-line3 {
        top: 73px;
        height: 6px;
      }
}

@media (min-width: 1400px) {
  header {
    height: 950px;
  }

  .header-content {
    margin-bottom: 120px;
  }

  .header-content h3 {
    font-size: 1.6em;
  }

  .beyond-headline h1 {
    font-size: 11em;
  }

  .white-line1 {
      top: 6.3em;
  }

}

@media (min-width: 1700px) {
  header {
    height: 950px;
  }

  .register-section {
    height: 750px;
  }
}
`;

export default PageContainer;
