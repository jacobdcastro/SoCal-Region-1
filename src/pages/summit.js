import React from 'react';
// import { graphql } from 'gatsby';
import styled from 'styled-components';
// import Head from '../utils/Helmet';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import PhotoGallery from '../components/summit/PhotoGallery';

const PageContainer = styled.div`
   margin: 0;
`;

class Summit extends React.Component {
   render() {
      return (
         <PageContainer>

            {/* Head and Navbar Stuff goes here */}

            <div class="header-content">
               <h3>ANNUAL LEADERSHIP SUMMIT</h3>
               <div class="beyond-headline headline">
                  <h1>BEYOND</h1>
                  <div class="line white-line1"></div>
               </div>
            </div>

            <div class="info-section">
               <div class="summary">
                  <p>
                     It is our prayer and belief that our churches, our leaders, our ministers, and our people would walk in the power and knowledge that God is capable of doing BEYOND what we could ever think, ask or imagine <a target="_blank" href="https://www.biblegateway.com/passage/?search=Ephesians+3%3A20-21&version=NIV">(Ephesians 3:20-21)</a>. We want HIM to be glorified in all that we do and accomplish, for it is only by HIS power that
                  </p>
                  <h5>IT. IS. DONE.</h5>
                  <p>
                     Our prayer is that the Lord would use this time of fellowship, worship and the Word to break barriers in our lives, our ministries, in our region and our world! God is truly capable of doing BEYOND what we think or imagine, and we are believing that this time would be a tool to inspire and expand our faith as to what God wants to do in and through us all!
                  </p>
               </div>

               <PhotoGallery />

               <div class="speakers">
                  <h3><i>Keynote Speaker:</i></h3>

                  <div id="johnMartin" class="john-martin">
                     <div class="john-title">
                        <img class="john-pic" src="images/summit-photos/edited/john-martin2.png" alt="Portrait of Pastor John Martin" />
                        <div>
                           <h4>Pastor John Martin</h4>
                           <h5>Victorville First Assembly</h5>
                        </div>
                     </div>
                     <p>In 2006, Pastor John C. Martin moved to Victorville, California from Seattle, Washington to pastor Victorville First Assembly. In the almost 12 years that Pastor John has been pastoring at Victorville First Assembly, the church has expanded from one to ten campus locations. In addition, the church offers worship services in English, Spanish, Korean, Indonesian and American Sign Language. The church's ministries have more than doubled in number and currently include the Feed My Sheep Food Bank, a School of Ministry, and Victor Valley Christian School. Pastor John has a heart to reach people for Christ and to develop fully devoted followers of God! As witnessed in the growth and expansion of the ministries underneath his leadership, he knows he serves a Big God who is capable of more than we could think or imagine, and he chases after all that God has at full speed.</p>
                  </div>
     
                  <h4 class="breakout-title"><i>With Breakout Speakers Featuring:</i></h4>

                  <div id="richShepherd" class="rich-shepherd speaker">
                     <div class="rich-title speaker-title">
                        <img class="speaker-pic" src="images/summit-photos/edited/rich-shepherd2.png" alt="Portrait of Rich Shepherd" />
                        <div>
                           <h4>Rich Shepherd</h4>
                        </div>
                        <img class="right-arrow" src="images/icons/right-arrow.svg" alt="Arrow icon" />
                     </div>
                     <p class="bio">Rich Shepherd is the Campus Pastor at Canyon Hills: San Luis Obispo. For 15 years, he, along with his wife, Vanessa, were Youth Pastors in Northern California and the Central Valley and have now been on the Central Coast for almost two years. Along with being Youth Pastors, they also served as media directors, college-age pastors, and children's pastors. They absolutely love the local church and believe it is the hope of the world. They have two children, MJ & Jacob and absolutely love all things coastal!</p>
                  </div>
     
                  <div id="drBillDogterom" class="bill-dogterom speaker">
                     <div class="bill-title speaker-title">
                        <img class="speaker-pic" src="images/summit-photos/edited/dr-bill-dogterom2.png" alt="Portrait of Dr. Bill Dogterom" />
                        <div>
                           <h4>Dr. Bill Dogterom</h4>
                        </div>
                        <img class="right-arrow" src="images/icons/right-arrow.svg" alt="Arrow icon" />
                     </div>
                     <p class="bio">Bill Dogterom has taught at Vanguard University for 20 years and has pastored and served as a pastoral consultant for 40 years. His passion is to partner with the Holy Spirit to prepare and support the next generations of ministers - regardless of their vocational calling. He and Judy have three adult sons, two daughters-in-law, and one perfect granddaughter.</p>
                  </div>
     
                  <div id="joeMoss" class="joe-moss speaker">
                     <div class="joe-title speaker-title">
                        <img class="speaker-pic" src="images/summit-photos/edited/joe-moss2.png" alt="Portrait of Joe Moss" />
                        <div>
                           <h4>Joe Moss</h4>
                        </div>
                        <img class="right-arrow" src="images/icons/right-arrow.svg" alt="Arrow icon" />
                     </div>
                     <p class="bio">Joe is from Los Angeles, CA where he grew up being a part of leading worship since he was 12 years old. For the last 10 years, Joe has served in full-time ministry as a worship pastor with Assembly of God churches in Northern and Southern California, including 8 years in Ojai. He now serves as Worship & Executive pastor at Crossroads Church in the Santa Ynez Valley.</p>
                  </div>
     
                  <div id="ricardoQuintana" class="ricardo-quintana speaker">
                     <div class="ricardo-title speaker-title">
                        <img class="speaker-pic" src="images/summit-photos/edited/ricardo-q2.png" alt="Portrait of Ricardo Quintana" />
                        <div>
                           <h4>Ricardo Quintana</h4>
                        </div>
                        <img class="right-arrow" src="images/icons/right-arrow.svg" alt="Arrow icon" />
                     </div>
                     <p class="bio">Ricardo has been a youth, executive, and lead pastor over the past 30 years. He was an Executive Pastor at New Life Church in Renton, Washington and experienced leadership at a church that doubled from 1700 to 3400 in just 7 years. It was there he learned the value of creating irrestistible environments for all who attend. From the street to the seat, everything matters to those looking for a place to connect with God and others. Along with a passion for reaching people for Christ, Ricardo understands the 'why' behind the need for a warm and welcoming environment at every church.</p>
                  </div>
     
                  <div id="joannJohnson" class="joann-johnson speaker">
                     <div class="joann-title speaker-title">
                        <img class="speaker-pic" src="images/summit-photos/edited/joann-johnson2.png" alt="Portrait of JoAnn Johnson" />
                        <div>
                           <h4>JoAnn Johnson</h4>
                        </div>
                        <img class="right-arrow" src="images/icons/right-arrow.svg" alt="Arrow icon" />
                     </div>
                     <p class="bio">JoAnn loves to inspire and empower others to reach their God-given potential. She has a passion to see the next generation of leaders trained and mobilized into ministry. Starting as the receptionist at Covina Assembly, she was given opportunities to take on more responsibilty and ultimately became one of the Preaching Pastors as well as the Executive Pastor. JoAnn is responsible for leading the Student Ministries and Young Adult Ministries. Her biggest accomplishment is her family. Her wonderful husband, Eric, and their two boys, Russell and Shane, keep life exciting!</p>
                  </div>
     
               </div>
            </div> {/* /.info-section */}
            
         </PageContainer>  
      );
   }
}

export default Summit;

